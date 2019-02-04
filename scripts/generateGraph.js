const fs = require("fs");
const util = require("util");
const game = require("../game");
const gameUtils = require("../game-utils");
const userModel = require("../user-model");
const exec = util.promisify(require("child_process").exec);

const dotFilename = "gameGraph.dot";
const pngFilename = "gameGraph.png";
const dotFileHeader = "digraph G {";
const dotFileFooter = "}";

const main = async function() {
  const fileLines = [];
  fileLines.push(dotFileHeader);
  for (let k of Object.keys(game)) {
    let user = gameUtils.createUser();
    user.locationHistory.push(k);
    for (let action of Object.keys(game[k].actions)) {
      user = game[k].actions[action](user);
      const location = user.state.ending
        ? `${user.state.ending}Ending`
        : userModel.currentLocation(user);
      user.state = {};
      fileLines.push(getGraphRelationship(k, location, action));
    }
  }
  fileLines.push(dotFileFooter);
  fs.writeFileSync(dotFilename, fileLines.join("\n"));
  await generateGraphPng();
};

function getGraphRelationship(from, to, label) {
  const graphRelationship = `${from} -> ${to} [ label="${label}" ];`;
  // console.log(graphRelationship);
  return graphRelationship;
}

async function generateGraphPng() {
  const command = `dot -Tpng ${dotFilename} > ${pngFilename}`;
  const { stdout, stderr } = await exec(command);
  if (stdout) {
    console.log("stdout: ", stdout);
  }
  if (stderr) {
    console.log("stderr: ", stderr);
  }
  await exec(`open ${pngFilename}`);
}

main();

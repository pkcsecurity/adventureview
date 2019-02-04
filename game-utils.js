const uuid = require("uuid/v4");
const startLocation = "corporatePeon";

module.exports = {
  createUser: () => {
    const id = uuid();
    const user = {
      id,
      state: {},
      locationHistory: [startLocation]
    };
    return user;
  },
  startLocation
};

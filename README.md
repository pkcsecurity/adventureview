# Adventureview

## Setup

1. Clone the repo
2. `cd adventureview`
3. `npm run first-time`, note: this will install serverless globally and local dynamodb.
4. `npm start`
5. Browse to `localhost:3000`

## Improve Game

If you want to change the game text or options, check out `game.js` at the project root. Creating the game graph can be helpful to see how your change impacted the game overall.

## Create Game Graph

1. Make changes (or don't) to `game.js` to update the game. Graph will be generated based on current state of `game.js`.
2. `npm run graph` (png and dot files are in `./scripts`)

## Deploy

If you have AWS creds, you can deploy by running `sls deploy`. This will (until we have separate dev and prod cloud environments) **immediately update game.pkc.io**, so choose wisely.

// Require the adapter
const adapt = require('adapter-github-actions');

// Require your Probot app's entrypoint, usually this is just index.js
const probot = require('./index');

// Adapt the Probot app for Actions
// This also acts as the main entrypoint for the Action
adapt(probot);
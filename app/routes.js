/*jshint esversion:6*/
"use strict";

// Load controllers
var profiles = require("./controllers/ProfileController");

module.exports = function(app) {
  // ==== Profiles =============================================================
  app.get('/api/profiles', profiles.getProfiles);
  app.get('/api/profiles/:name', profiles.getProfile);

  // ===========================================================================
};

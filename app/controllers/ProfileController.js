var _ = require("lodash"),
    data = require("../profiles.json");

module.exports = {
  // TODO: unify getProfiles and getProfile
  getProfiles: function(req, res) {
    var picked = _.mapValues(data, _.bind(_.pick, null, _, ["id", "name", "thumbUrl"]));
    return res.send(picked);
  },

  getProfile: function (req, res) {
    var name = req.params.name,
        profile = data[name];

    if (!profile)
      return res.status(404).json("Unknown profile");

    return res.send(profile);
  }
};

cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-moengage-core.MoECordova",
      "file": "plugins/cordova-moengage-core/www/MoECordova.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoECordova"
      ]
    },
    {
      "id": "cordova-moengage-core.MoEConstants",
      "file": "plugins/cordova-moengage-core/www/MoEConstants.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoEConstants"
      ]
    },
    {
      "id": "cordova-moengage-core.MoEJsonProvider",
      "file": "plugins/cordova-moengage-core/www/MoEJsonProvider.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoEJsonProvider"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-moengage-core": "9.0.0"
  };
});
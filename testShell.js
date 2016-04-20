/**
 * Created by sravanm on 20-04-2016.
 */


var Promise = require('bluebird')
var adb = require('adbkit')
var client = adb.createClient()
client.listDevices()
  .then(function(devices) {
        Promise.map(devices, function(device) {
            console.info("running command...\n adb shell am instrument -w io.appium.uiautomator2.server.test/android.support.test.runner.AndroidJUnitRunner... ")
       client.shell(device.id, "am instrument -w io.appium.uiautomator2.server.test/android.support.test.runner.AndroidJUnitRunner")
        })
  })
  .catch(function(err) {
    console.error('Something went wrong:', err.stack)
  })

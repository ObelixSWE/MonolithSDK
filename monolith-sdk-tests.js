// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by monolith-sdk.js.
import { name as packageName } from "meteor/monolith-sdk";

// Write your tests here!
// Here is an example.
Tinytest.add('monolith-sdk - example', function (test) {
  test.equal(packageName, "monolith-sdk");
});

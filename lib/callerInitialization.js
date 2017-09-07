import Promise from "bluebird";
import { Meteor } from "meteor/meteor";


export const aMeteor = Promise.promisifyAll(Meteor);
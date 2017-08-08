/**
 * Created by nick on 31/07/17.
 */

import { Mongo } from "meteor/mongo";
import Promise from "bluebird";

export const BubbleCollection = new Mongo.Collection("BubbleCollection");
export const aBubbleCollection = Promise.promisifyAll(BubbleCollection);
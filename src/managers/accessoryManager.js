const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

// Second create type
exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getOthers = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } });
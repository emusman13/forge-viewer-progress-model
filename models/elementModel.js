const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UniqueId = String;

let EleementModel = new Schema({
    _id : UniqueId,
    FamilyType : String,
    Mark : String,
    Phase : String
},{
    collection : "Eleements", //elements
    versionKey : false
},{
    _id : false // suppress automatic generation so Element unique ID can be _id in the database
});

module.exports = mongoose.model("Eleements", EleementModel); //Elements, ElementModel
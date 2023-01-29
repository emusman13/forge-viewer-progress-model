const db = require("../models");
var EleementModel = db.mongoose.model('Eleements');

EleementsController = {

    //Controller function to save one eleement item to mongo DB
    saveOne : function(req, res){
       
        console.log('Insert One');

        // Create a Eleement Model
        const eleementModel = new EleementModel({
            _id : req.body.UniqueId,
            FamilyType: req.body.FamilyType,
            Mark: req.body.Mark,
            Phase: req.body.Phase, 
        });

        EleementModel.create(eleementModel, (err, eleement) => {
           if (err) return console.log(err);
           return res.send(eleement);
        });

    },

    //Controller function to get all eleement entries
    getAll : function(req, res){
        console.log('Get All');

        EleementModel.find({},(err, results) => {
            if (err) return console.log(err);
            return res.send(results);
        });
    },

    //Controller function to batch save eleement entries
    batchSave : function(req, res) {
        console.log('Insert batch');

            // To Count Documents of a Eleements collection
            db.mongoose.connection.db.collection("Eleements").count((err, count) => {

                console.dir(count);

                if(count == 0) {
                    console.log("Found No Records.");

                    EleementModel.insertMany(req.body, (err, eleement) => {
                        if (err) return console.log(err);
                        return res.send(eleement);
                    });

                }
                else {
                    console.log("Found Records : " + count);

                    const writeOperations = req.body.map((item) => {
                        return {
                        updateOne: {
                            filter: { _id: item._id },
                            update: { Phase: item.Phase , Mark: item.Mark}
                        }
                        };
                    });
            
                    EleementModel.bulkWrite(writeOperations, (err, eleement) => {
                        if (err) return console.log(err);
                        return res.send(eleement);
                    });

                }
            });
               
    },
        
    //Controller function to update one eleement item
    updateOne : function(req, res) {
        console.log('Update One');
        var id = req.body._id;

        EleementModel.updateOne({'_id': id}, {$set: {Phase: req.body.Phase}}, (err, eleement) => {
            if (err) return console.log(err);
            return res.send(eleement);
        })
    },

    //Controller function to delete one eleement item
    delete : function(req, res){
        console.log('Delete One');
        var id = req.body._id;

        EleementModel.deleteOne({'_id':id}, (err,eleement) => {
            if (err) return console.log(err);
            return res.send(eleement);
        });
    }

};
  
module.exports = EleementsController;
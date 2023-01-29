module.exports = (app) => {

    const EleementsController = require("../controllers/eleementController");
    var router = require("express").Router();

    //Retrieve all eleements
    router.get("/", EleementsController.getAll);  
    
    // Create a new Eleement Document
    router.post("/add", EleementsController.saveOne);

    // Create a new Eleement Document
    router.post("/batch", EleementsController.batchSave);

    //Update one eleement finish value
    router.patch("/update", EleementsController.updateOne);  
 
    //Delete one Eleement element
    router.delete("/delete", EleementsController.delete);
  
    app.use("/api/eleements", router);
};
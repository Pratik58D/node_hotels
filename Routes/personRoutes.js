const express = require("express");
const Person = require("../models/personModel");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    //create a new Person document using the mongoos model
    const newPerson = new Person(data);

    //save the new person to database
    const response = await newPerson.save();
    console.log("data saaved");
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: " internal server Error" });
  }
});

//get Method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetching sucessfull");
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: " internal server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    console.log(workType);
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("response Fetched");
      return res.status(200).json(response);
    } else {
      return res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: " internal server Error" });
  }
});


//updating 

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the url Parameter

    const updatedPersonData = req.body; //updated data for the Person

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //returns the updated Documnet
        runValidators: true, //Run Mongoose Validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data Updated");
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: " internal server Error" });
  }
});


//delete method


router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the url Parameter

    const response = await Person.findByIdAndDelete(personId,);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data deleted");
    return res.status(200).json({msg:"the data has been deleted"});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: " internal server Error" });
  }
});

module.exports = router;

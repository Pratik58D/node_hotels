const express = require("express");
const MenuItem = require("../models/menuModel");



const router = express.Router();

//post method to add menu items
router.post("/",async(req,res)=>{
    try{
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response =  await newMenu.save();
      console.log("data is saved");
      return res.status(200).json(response);
    }
    catch(err){
      console.log("error in munu posting",err)
      return res.status(500).json({ error: " internal server Error" });
    
    }
      
    })
    
    
    //get method to get Menu ITems
    router.get("/", async (req, res) => {
      try {
        const data = await MenuItem.find();
        console.log("data fetching sucessfull");
        return res.status(200).json(data);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: " internal server Error" });
      }
    });


router.get("/:tasteType", async(req,res) => {

        try{
        const tasteType = req.params.tasteType;
    
          if(tasteType == "sweet" || tasteType == 'sour' || tasteType == "spicy" || tasteType =="salty" ){
            const response = await MenuItem.find({taste : tasteType})
            console.log("response Fetched");
            return res.status(200).json(response);
      
          }else{
            return res.status(404).json({error: 'Invalid work type'});
          }
      
        }catch(err){
          console.log(err);
          return res.status(500).json({ error: " internal server Error" });
        }
      
      })
      


    module.exports = router;
    
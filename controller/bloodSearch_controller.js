const Donner = require('../model/donner.js');

exports.getAllDonner = async (req, res , next) => {

    try {  

     const page = Number(req.query.page) || 1;
     const limit = Number(req.query.limit) || 10;
     const skip = (page - 1) * limit
    
     const count = await Donner.find().countDocuments();
     const result = await Donner.find().skip(skip).limit(limit);
    
  
      res.status(200).json({
        status: 'success',
        count : count , 
        data: result
      })
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'blood all searching fail',
        error: error.message
      })
    }
  
  }



exports.getSingleBloodGroup = async (req, res , next) => {

    try {  
    
     const group = req.query.group;
    
     const page = Number(req.query.page) || 1;
     const limit = Number(req.query.limit) || 10;
     const skip = (page - 1) * limit
    

// For_plus_sign == %2B 
// example For O+ == O%2B 
// example For O- == O- 

const count = await Donner.find().countDocuments();
const result =  await Donner.find({bloodGroup:`${group}`}).skip(skip).limit(limit)

      if(result){
        
      res.status(200).json({
        status: 'success',
        data: result
      })

      }else{
        res.status(200).json({
          status: 'fail',
          data: "there is no donor by email "
        })
      }
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'blood searching fail',
        error: error.message
      })
    }
  
  }


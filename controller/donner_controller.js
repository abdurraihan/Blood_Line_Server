const Donner = require('../model/donner.js');

exports.createDonner = async (req, res , next) => {

    try {  

      const Data = req.body;
  
      const result = await Donner.create(Data)
        ;
  
      res.status(200).json({
        status: 'success',
        message: 'Donner inserted successfully',
        data: result
      })
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Donner insertion fail',
        error: error.message
      })
    }
  
  }



  exports.updateDonner = async (req, res, next) => {
    try {
      const {email}=  req.params;
      const data =  req.body;
      
     
      
      
      const result = await Donner.updateOne({ email: email }, { $set: data }, {
        runValidators: true
    })

  

      if (result.modifiedCount) {
        res.status(200).json({
          status: "successful",
          message: "Donner updated"
        })
      }
  
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Donner update fail',
        error: error.message
      })
    }
  }
  


exports.deleteDonner = async (req, res, next) => {
    try {
      
      const { email } = req.params;
  
      const result = await Donner.deleteOne({ email:email });
      console.log(result);
  
      if (result.acknowledged && result.deletedCount) {
        res.status(200).json({
          status: "successful",
          message: "deleted Donner"
        })
      }else{
        res.status(400).json({
          status: 'fail',
          message: 'Donner Delete fail',
          error: error.message
        })
      }
  
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Donner Delete fail',
        error: error.message
      })
    }
  }



exports.getDonnerByEmail = async (req, res, next) => {
    try {
      
      const { email } = req.params;
      const donor = await Donner.findOne({ email:email });
     
      if(donor){
        res.status(200).json({
          status: "successful",
          data : donor,
       })
      }else{
        res.status(400).json({
          status: "fail",
          message: "Donner not found",
        })
      }
     
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: "Donner can't found ",
        error: error.message
      })
    }
  }
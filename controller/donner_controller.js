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
      const  {email} = await req.params;
      const data = await req.body;
      
     
      
      
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
  

  exports.deleteDonner = async (req,res,next) => {

    const result = await Product.deleteOne({ _id: id });

    return result;
}




exports.deleteDonner = async (req, res, next) => {
    try {
  
      const { email } = req.params;
  
      const result = await Donner.deleteOne({ email:email });

  
      if (result.acknowledged) {
        res.status(200).json({
          status: "successful",
          message: "deleted Donner"
        })
      }
  
  
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 'fail',
        message: 'Donner Delete fail',
        error: error.message
      })
    }
  }
const user = require("../model/user");

const collect2 = require("../model/collect2")
// const collect4 = require("../model/collect4")


// http://localhost: 3000/user/getUser
exports.getAllUsers=async(req,res)=>{
    try{
        // const id = req.params.id
        // console.log(id)
        // const data = await user.findById('63811863f2a8b6d030e43032')
        // const data = await user.find({patientName:"ashish"});
        const data = await user.findById("6374cff79d4d19f3cea04c48").populate(["specimenID", "symptomsID", "MedicalConditionsID", "hospitalizationID", "doctorID"])
        // const data = await user.find({hospitalState:"Delhi"});
        // const data = await user.find({hospitalName:"panth"})
        // const data = await user.findById("63811863f2a8b6d030e43032").populate(["specimenID", "symptomsID", "MedicalConditionsID", "hospitalizationID", "doctorID"])
        // const data = await user.find({doctorName: "sundeep"})


        return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})    
    }
}


// http://localhost:3000/user/postUser
exports.postUsers=async(req, res)=>{
    // print karega req body (of postman after hitting)
    console.log(req.body)
    console.log('hello') 
    // create hoga collection using imported usermodel in postman and sari values req.body se lega postman ki
    const postUser = await user.create({
        patientName : req.body.patientName,
        age : req.body.age,
        gender:req.body.gender,
        mobileNumber : req.body.mobileNumber,
        MobileNumberBelongsTo: req.body.MobileNumberBelongsTo,
        nationality:req.body.nationality,
        patientInQuarantineFacility:req.body.patientInQuarantineFacility,
        patientVillageOrTown:req.body.patientVillageOrTown,
        districtOfPresentResidence: req.body.districtOfPresentResidence,
        stateOfPresentResidence: req.body.stateOfPresentResidence,
        presentPatientAdress:req.body.presentPatientAdress,
        pincode : req.body.pincode,
        aadharCard: req.body.aadharCard,
        specimenID:req.body.specimenID,
        symptomsID: req.body.symptomsID,
        MedicalConditionsID:req.body.MedicalConditionsID,
        symptomsID: req.body.symptomsID,
        hospitalizationID:req.body.hospitalizationID,
        doctorID: req.body.doctorID

    })
    // return sb json format mei karega ye postman mei (response body)
    return res.json({
        status:true,
        data : postUser

    })
}







const mongoose = require('mongoose')
// const specimenID = require('C:\\Users\\deepa\\OneDrive\\Desktop\\project\\model\\collect2.js')
// const specimenID = require('./model/collect2/specimenInfo')
// const subcategories = require('./Subcategory')
const collection1 = new mongoose.Schema({
    patientName:{
        type:String,
        min :2,
        max:12,
        required:true,
        uppercase : true
    },
    age:{
        type:Number,
        min :1,
        max:150,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","others"]
    },
    mobileNumber:{
        type:Number,
        length:10,
        required:true,
    },
    MobileNumberBelongsTo:{
        type:String,
        required:true,
        enum:["self", "family"]
    },
    nationality:{
        type:String,
        required:true
    },
    patientInQuarantineFacility:{
        type:Boolean,
        required:true
    },
    patientVillageOrTown:{
        type:String,
        max:28,
        required:true
    },
    districtOfPresentResidence:{
        type:String,
        required:true
    },
    stateOfPresentResidence:{
        type:String,
        required:true
    },
    presentPatientAdress:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        length:6,
        required:true
    },
    aadharCard:{
        type:Number,
        length:12,
        nullable :true
    },
    specimenID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'specimenInfos',
        required:true 
    },
    symptomsID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'clinicalSignAndSymptoms',
        required:true 
    },
    MedicalConditionsID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'preExistingMedicalConditions',
        required:true 
    },
    hospitalizationID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'hospitalizationDetails',
        required:true 
    },
    doctorID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'doctorInfos',
        required:true 
    }
},{
    timestamps:true
}
)
module.exports = mongoose.model("personalDetails", collection1)
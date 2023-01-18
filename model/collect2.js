const mongoose = require('mongoose')


const collection2 = new mongoose.Schema({
    patientID: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "personalDetails"
        }],
    specimenType:{
        type:Array,
        required:true,
        Array:["throatSwab", "nasalSwab", "BAL", "ETA", "nasopharyngealSwab"]
    },
    collectionDate:{
        type:String,
        required:true,
        lowercase:true
    }
    
},{
    timestamps:true
}
)
module.exports = mongoose.model("specimenInfos", collection2)


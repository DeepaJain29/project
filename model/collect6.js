const mongoose = require('mongoose')

const collection6 = new mongoose.Schema({
    // doctor_id: {
    //     type: String, required: true
    // },
    doctorName:{
        type:String,
        nullable:true,
        lowercase:true
    },
    doctorMobileNumber:{
        type:Number,
        length:10,
        nullable:true
    },
    doctorEmail:{
        type:String,
        nullable:true,
        lowercase:true
    }
},{
    timestamps:true
}
)
module.exports = mongoose.model("doctorInfos", collection6)


const mongoose = require('mongoose')

const collection7 = new mongoose.Schema({
    // doctor_id: {
    //     type: String, required: true
    // },
    patientCategory:{
        type:String,
        nullable:true,
        enum : []
    },
    
},{
    timestamps:true
}
)
module.exports = mongoose.model("patientCategories", collection7)


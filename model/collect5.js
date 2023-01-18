const mongoose = require('mongoose')
const collection5 = new mongoose.Schema({
    hospitalized:{
        type:Boolean,
        nullable:true
    },
    hospitalId:{
        type:Number,
        nullable:true
    },
    hospitalState:{
        type:String,
        nullable:true,
        lowercase:true
        // enum : ["Andhra Pradesh","Arunachal Pradesh","Bihar"," Chhattisgarh","Goa","Gujarat",
        // "Haryana",	"Himachal Pradesh",	"Jharkhand","Karnataka","Kerala",	 
        // "Assam", "Madhya Pradesh", "Maharashtra","Manipur",	"Meghalaya","Mizoram",
        // "Nagaland",	"Odisha", "Punjab", "Rajasthan", "Sikkim","Tamil Nadu",
        // "Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal", "Andaman and Nicobar Island","Chandigarh",
        // "Dadra and Nagar Haveli and Daman and Diu","Delhi",
        // "Jammu and Kashmir","Ladakh","Lakshadweep",	"Puducherry"]
    },
    hospitalDistrict:{
        type:String,
        nullable:true,
        lowercase:true
    },
    hospitalName:{
        type:String,
        nullable:true,
        lowercase:true
    },
    hospitalizationDate:{
        type:String,
        nullable:true,
        lowercase:true
    },
},{
    timestamps:true
}
)
module.exports = mongoose.model("hospitalizationDetails", collection5)
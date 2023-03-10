const mongoose = require('mongoose')
const collection3 = new mongoose.Schema({
    cough:{
        type:Boolean,
        nullable:true
    },
    diarrhoea:{
        type:Boolean,
        nullable:true
    },
    vomiting:{
        type:Boolean,
        nullable:true
    },
    feverAtEvaluation:{
        type:Boolean,
        nullable:true
    },
    abdominalPain:{
        type:Boolean,
        nullable:true
    },
    breathlessness:{
        type:Boolean,
        nullable:true
    },
    nausea:{
        type:Boolean,
        nullable:true
    },
    haemoptysis:{
        type:Boolean,
        nullable:true
    },
    bodyAche:{
        type:Boolean,
        nullable:true
    },
    soreThroat:{
        type:Boolean,
        nullable:true
    },
    chestPain:{
        type:Boolean,
        nullable:true
    },
    nasalDischarge:{
        type:Boolean,
        nullable:true
    },
    sputum:{
        type:Boolean,
        nullable:true
    },
    symptomAppearFirst:{
        type:Array,
        nullable:true,
        Array:["cough", "diarrhoea","sputum", "nasalDischarge", "chestPain", "soreThroat", "bodyAche", "haemoptysis", "nausea", "breathlessness", "abdominalPain", "feverAtEvaluation", "vomiting"]
    }
},{
    timestamps:true
}
)
module.exports = mongoose.model("clinicalSignAndSymptoms", collection3)
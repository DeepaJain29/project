const collect3 = require("../model/collect3")

// http://localhost: 3000/collect3/getUser3
exports.getAllUsers3=async(req,res)=>{
    try{
        // const id = req.params.id
        // console.log(id)
        const data = await collect3.find({
            cough:true,
            symptomAppearFirst:"cough"
        });
        return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})    
    }
}


// http://localhost:3000/collect3/postUser3
exports.postUsers3 = async(req, res)=>{
    console.log(req.body)
    console.log('hello3')
    // me ye create krri hu columns into database, so that databse have a structure to take yp the data.n response mei merko created structure mei (req.body )se lia hua data milega
    const postUser3 = await collect3.create({
        cough : req.body.cough,
        diarrhoea : req.body.diarrhoea,
        vomiting : req.body.vomiting,
        feverAtEvaluation : req.body.feverAtEvaluation,
        abdominalPain : req.body.abdominalPain,
        breathlessness : req.body.breathlessness,
        nausea : req.body.nausea,
        haemoptysis : req.body.haemoptysis,
        bodyAche : req.body.bodyAche,
        soreThroat : req.body.soreThroat,
        chestPain : req.body.chestPain,
        nasalDischarge : req.body.nasalDischarge,
        sputum : req.body.sputum,
        symptomAppearFirst:req.body.symptomAppearFirst
    })
    return res.json({
        status:true,
        data : postUser3

    })
}



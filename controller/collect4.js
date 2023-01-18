const collect4 = require("../model/collect4")

// http://localhost: 3000/collect4/getUser4
exports.getAllUsers4=async(req,res)=>{
    try{
        // const id = req.params.id
        // console.log(id)
        const data = await collect4.find({
            hypertension:true
        });
        return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})    
    }
}


// http://localhost:3000/collect4/postUser4
exports.postUsers4 = async(req, res)=>{
    console.log(req.body)
    console.log('hello4')
    // me ye create krri hu columns into database, so that databse have a structure to take yp the data.n response mei merko created structure mei (req.body )se lia hua data milega
    const postUser4 = await collect4.create({
        chronicLungDisease:req.body.chronicLungDisease,
        malignancy:req.body.malignancy,
        heartDisease: req.body.heartDisease,
        chronicLiverDisease:req.body.chronicLiverDisease,
        chronicRenalDisease:req.body.chronicRenalDisease,
        diabetes:req.body.diabetes,
        hypertension:req.body.hypertension,
        immunocompromizedCondition:req.body.immunocompromizedCondition,
        otherUNnderlyingDisease:req.body.otherUNnderlyingDisease
    })
    return res.json({
        status:true,
        data : postUser4

    })
}



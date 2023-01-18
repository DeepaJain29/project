const collect2 = require("../model/collect2")

// http://localhost: 3000/collect2/getUser2
exports.getAllUsers2=async(req,res)=>{
    try{
        // const id = req.params.id
        // console.log(id)
        const data = await collect2.find({
            specimenType:"nasalSwab"
        });
        return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})    
    }
}


// http://localhost:3000/collect2/postUser2
exports.postUsers2 = async(req, res)=>{
    console.log(req.body)
    console.log('hello2')
    // me ye create krri hu columns into database, so that databse have a structure to take yp the data.n response mei merko created structure mei (req.body )se lia hua data milega
    const postUser2 = await collect2.create({
        specimenType : req.body.specimenType,
        collectionDate : req.body.collectionDate
    })
    return res.json({
        status:true,
        data : postUser2

    })
}



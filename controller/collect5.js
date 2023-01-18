const collect5 = require("../model/collect5");


// http://localhost: 3000/collect5/getUser5
exports.getAllUsers5=async(req,res)=>{
    try{
        // const id = req.params.id
        // console.log(id)
        // const data = await collect5.find({
        //     hospitalState:"Delhi",
        //     hospitalDistrict:"karolbagh"

        // });
        const data = await collect5.find({hospitalName:"rupali"})
        return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})    
    }
}


// http://localhost:3000/collect5/postUser5
exports.postUsers5 = async(req, res)=>{
    console.log(req.body)
    console.log('hello5')
    // me ye create krri hu columns into database, so that databse have a structure to take yp the data.n response mei merko created structure mei (req.body )se lia hua data milega
    const postUser5 = await collect5.create({
        hospitalized : req.body.hospitalized,
        hospitalId : req.body.hospitalId,
        hospitalState : req.body. hospitalState,
        hospitalDistrict : req.body.hospitalDistrict,
        hospitalName : req.body.hospitalName,
        hospitalizationDate : req.body.hospitalizationDate
    })
    return res.json({
        status:true,
        data : postUser5

    })
}



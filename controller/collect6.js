const collect6 = require("../model/collect6")

// http://localhost: 3000/collect6/getUser6
exports.getAllUsers6=async(req,res)=>{
    try{
        // const id = req.params.id
        // console.log(id)
        const data = await collect6.find({
            doctorName:"sundeep"
        });
        return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})    
    }
}


// http://localhost:3000/collect6/postUser6
exports.postUsers6 = async(req, res)=>{
    console.log(req.body)
    console.log('hello6')
    // me ye create krri hu columns into database, so that databse have a structure to take yp the data.n response mei merko created structure mei (req.body )se lia hua data milega
    const postUser6 = await collect6.create({
        doctorName: req.body.doctorName,
        doctorMobileNumber: req.body.doctorMobileNumber,
        doctorEmail: req.body. doctorEmail,
    })
    return res.json({
        status:true,
        data : postUser6

    })
}



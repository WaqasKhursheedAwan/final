const poetModel = require('../model/poetModel')
// create poet
exports.createPoet = async (req, res) => {
    try {
        console.log(req.body);
    const data = await poetModel.create(req.body);
    res.status(201).json({success: true,data});
    } catch (error) {
        res.status(500).json({error: error})
    }
    
};
// Get poet
exports.getPoet = async (req, res) => {
    try {
        const results = await poetModel.find();
    // res.send(results);
    res.status(200).json({success: true,results})
    } catch (error) {
        res.status(500).json({error: error})
    }
    
}
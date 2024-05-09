const productModel = require('../models/productModel')

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {

    let query = req.query.keyword?{ name: {
        $regex:req.query.keyword,
        $options:"i"
    }}:{}

    const products = await productModel.find(query);

    res.json({
        success: true,
        products: products
    })
}

//Get Single Product API - /api/v1/products/:id
exports.singleProduct = async(req, res, next) => {
    try{
        const product = await productModel.findById(req.params.id)
        res.json({
            succes: true,
            product:product
        })
    }catch(err){
        res.status(404).json({
            succes: false,
            error: "Unable to Get product"
        })
    }

}
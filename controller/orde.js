const OrderItem = require('../models/order');


exports.addItemToOrder=async (req,res, next)=>{
    // const id= req.params.prodid;
    //   console.log(id);
    // const item = await Product.findById(id)
    // console.log('ittttttttttttttttttttttttttttt',item);

    const orderedItem = new OrderItem({
        _id : req.body.id,
        name:req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    });

    orderedItem.save()
    .then(item=>res.json(item))
    .catch(err=>console.log(err));
}

exports.getAllOrderedItems = (req,res,next)=>{
    OrderItem.find()
    .then(response=>res.json(response))
    .catch(err=>console.log(err));
}

exports.deleteItemById =(req,res,next)=>{
    const id = req.params.id;
    OrderItem.findByIdAndRemove(id)
    .then(item=>res.json(item))
    .catch(err=>console.log(err))
}
const FoodItems = require('../models/modelItems');

exports.getAllItem = (req, res, next) => {
    FoodItems.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
}

exports.postAnItem = (req, res, next) => {
    const newFood = new FoodItems({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    })
    console.log('llllll', newFood);

    newFood.save()
        .then(item => res.json(item))
        .catch(err => console.log(err))
}

exports.deletItem = (req, res, next) => {
    const id = req.params.prodId;
    FoodItems.findByIdAndRemove(id)
        .then(item => res.json(item))
        .catch(err => console.log(err));
}

exports.editItem =async(req, res, next) => {
    
    const id= req.body.id;
    const name= req.body.name;
    const price=req.body.price;
    const image=req.body.image;
    const description=req.body.description;
    
    // console.log('tttttttt', name)
    //

    // const items = await FoodItems.findById(req.body.id);
    // console.log(items);
    // console.log(req.body.id)

    FoodItems.findById(id)
    .then(prod => {
        prod.name = name;
        prod.price = price;
        prod.image = image;
        prod.description = description;
        return prod.save();
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
 
}
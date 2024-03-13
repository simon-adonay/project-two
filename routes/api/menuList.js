const express = require('express');
//const auth = require('../../middleware/auth');

const router = express.Router();

const controller = require('../../controller/menuList');
const userControler = require('../../controller/orde');


router.get('/getItem', controller.getAllItem);
router.post('/getItem', controller.postAnItem);
router.delete('/deleteItem/:prodId', controller.deletItem);
router.post('/editItem', controller.editItem);


//order
router.post("/order",userControler.addItemToOrder);
router.get("/getordereditems",userControler.getAllOrderedItems);
router.delete('/order/:id', userControler.deleteItemById);



module.exports = router;
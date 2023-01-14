const express=require('express');
const router=express.Router();

const controller=require('../controller/indexc');

//router.post('/',controller.postaddproduct);
router.post('/',controller.postaddproduct);
router.get('/fetchdata',controller.fetchdata);
router.delete('/deletedata/:id',controller.deletedata);
router.put('/updatedata/:id',controller.updatedata);


module.exports=router;

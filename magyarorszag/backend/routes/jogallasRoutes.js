const express=require('express');
const router=express.Router();
const {jogallaslista,jogallastelepulesei}=require('../controllers/jogallasController');

router.get('/',jogallaslista);
router.get('/tipus/:jogallas',jogallastelepulesei);

module.exports=router;
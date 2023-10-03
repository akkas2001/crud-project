const express = require('express');
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const subAdminController = require('../controllers/subAdminController');
const postController = require('../controllers/postController.js');

const router = express.Router();


//////userController
router.get('./userDetails',userController.create);
router.get('./createUser',userController.read);
router.get('./deleteUser',userController.delete);
router.get('./updateUser',userController.update);

/////adminController
router.get('./adminDetails',adminController.create);
router.get('./createAdmin',adminController.read);
router.get('./deleteAdmin',adminController.delete);
router.get('./updateAdmin',adminController.update);

/////subAdminController
router.get('./subAdminDetails',subAdminController.create);
router.get('./subAdminCreate',subAdminController.read);
router.get('./subAdminDelete',subAdminController.delete);
router.get('./subAdminUpdate',subAdminController.update);

/////postController
router.get('./PostDetails',postController.create);
router.get('./postCreate',postController.read);
router.get('./postDelete',postController.delete);
router.get('./postUpdate',postController.update);


module.exports = router;
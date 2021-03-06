const express = require('express');
var multer = require('multer');

var userController = require('../controllers/user.controller.js');
var userValidate = require('../validate/user.validate.js');

var upload = multer({ dest: './public/' });

var router = express.Router();

router.get('/', userController.index);

router.get('/add', userController.add);

router.get('/:id/delete', userController.delete);

router.get('/:id/update', userController.update);

router.get('/profile', userController.profile);

router.get('/profile/avatar', userController.uploadAvatar);

router.post('/profile/avatar', upload.single('avatarUrl'), userController.postUpLoadAvatar);

router.post('/add', userValidate.postAdd, userController.postAdd);

router.post('/:id/update', userController.postUpdate);

module.exports = router;
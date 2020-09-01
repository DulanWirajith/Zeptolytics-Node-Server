const express = require('express');
const router = express.Router();
const sbl_controller = require('./../controller/sbl_controller');
const msg_controller = require('./../controller/msg_controller');
const asbg_controller = require('./../controller/asbg_controller');
const ms_controller = require('./../controller/ms_controller');


router.get('/send_dummy_data_sbl', sbl_controller.sendDummyDataToMongo);
router.get('/get_dummy_data_sbl', sbl_controller.receiveDummyData);

router.get('/send_dummy_data_msg', msg_controller.sendDummyDataToMongo);
router.get('/get_dummy_data_msg', msg_controller.receiveDummyData);

router.get('/send_dummy_data_asbg', asbg_controller.sendDummyDataToMongo);
router.get('/get_dummy_data_asbg', asbg_controller.receiveDummyData);

router.get('/send_dummy_data_ms', ms_controller.sendDummyDataToMongo);
router.get('/get_dummy_data_ms', ms_controller.receiveDummyData);

module.exports = router;
const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');
const adminDocMiddleware = require('../middleware/adminDoctorMiddleware');
const {
  addPatientDetails,
  getPatientDetails,
  getAllPatientDetails,
  updatePatient,
  deletePatient,
} = require('../controllers/Patient');
router.get('/', getAllPatientDetails);
router.post('/',addPatientDetails)
router.get('/:id', getPatientDetails);
router.patch('/:id', updatePatient);
router.delete('/:id', adminMiddleware, deletePatient);
module.exports = router;

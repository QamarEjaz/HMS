const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');
const adminDocMiddleware = require('../middleware/adminDoctorMiddleware');
const {
  getDoctors,
  postDoctors,
  deleteDoctor,
  getDoctor,
  editDoctor,
} = require('../controllers/Doctor');
const {
  getAppointments,
  postAppointment,
  updateAppointment,
} = require('../controllers/Appointment');
// apies to get and post docters
router.get('/', getDoctors);
router.post('/',  postDoctors);
// apies for admin to apply crud on docter
router.get('/:id', adminDocMiddleware, getDoctor);
router.patch('/:id', adminMiddleware, editDoctor);
router.delete('/:id', adminMiddleware, deleteDoctor);
router.get('/:id/appointments', adminDocMiddleware, getAppointments);
router.post('/:id/appointments', adminDocMiddleware, postAppointment);
router.patch('/appointments/:id', adminDocMiddleware, updateAppointment);
module.exports = router;

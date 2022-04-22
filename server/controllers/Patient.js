const { StatusCodes } = require('http-status-codes');
const Patient = require('../models/Patient');
const addPatientDetails=async(req,res)=>{
  const patient = await Patient.create(req.body);
  console.log("helo patients")
 return res.status(StatusCodes.CREATED).json({ patient });
}
const getPatientDetails = async (req, res) => {
  console.log("get end point")
  const { id } = req.params;
  const patient = await Patient.find({ _id: id }).select('-password');

  return res.status(StatusCodes.OK).json({ patient });
};
const getAllPatientDetails = async (req, res) => {
  const patients = await Patient.find({}).select('-password');
  res.status(StatusCodes.OK).json({ patients });
};
const updatePatient = async (req, res) => {
  const { id } = req.params.id;

  const patient = await Patient.findByIdAndUpdate(id, req.body);
  res.status(StatusCodes.OK).json({ patient });
};
const deletePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findByIdAndDelete(id);
  if (!patient) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Patient not found' });
  } else {
    res.status(StatusCodes.OK).json({ patient });
  }
};

module.exports = {
  addPatientDetails,
  getPatientDetails,
  getAllPatientDetails,
  updatePatient,
  deletePatient,
};

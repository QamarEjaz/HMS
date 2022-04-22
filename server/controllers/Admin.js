const Admin = require('../models/Admin');
const sendToken = require('../utils/senToken');

const postAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  
  sendToken(admin, 201, res);
};
const getAdmins = async (req, res) => {
  const admins = await Admin.find({}).select('-password');
  console.log(req.body)
  res.status(200).json({ admins });
};
const updateAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select('-password');
  res.status(200).json({ admin });
};
const getAdmin = async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findById(id);
  if (admin) {
    res.status(200).json({ admin });
  } else {
    res.status(404).json({ error: 'Admin not found' });
  }
};
module.exports = {
  postAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
};

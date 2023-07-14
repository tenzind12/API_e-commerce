const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first registered user is an admin
  const isFirstAccout = (await User.countDocuments({})) === 0;
  const role = isFirstAccout ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });

  // issuing token
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  const token = jwt.sign(tokenUser, 'jwtsecret', { expiresIn: '1d' });

  res.status(StatusCodes.CREATED).json({ user: tokenUser, token });
};

const login = async (req, res) => {
  res.send('login');
};

const logout = async (req, res) => {
  res.send('logout');
};

module.exports = { register, login, logout };

const mongoose = require('mongoose');
const Joi = require ('joi');
const {rentals} = require('./routes/rentals');
const express = require ('express');
const app = express();
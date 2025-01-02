const express = require('express');
const router = express.Router();
const Project = require('../models/Project')


// Create a new project
router.post('/', async(req,res))
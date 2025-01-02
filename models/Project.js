const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    imageURL: [String],
    stack: String,
    description: String,
    link: String,
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports =  Project
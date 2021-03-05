const mongoose = require('mongoose')
// Tasks

const taskSchema = new mongoose.Schema({
    description: {
        required: true,
        trim: true,
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})
const Task = mongoose.model('Task', taskSchema)


// const tasks = new Task({
//     description: 'Cooking',
    
// })

// tasks.save().then(() => {
//     console.log(tasks)
// }).catch((error) => {
//     console.log('Error', error)
// })

module.exports = Task
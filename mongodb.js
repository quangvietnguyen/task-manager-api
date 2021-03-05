// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const  { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

    // Delete
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Cooking'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    //-----------------------------------------------------
    // Update
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("602cd100c62b800f8aa61c6e")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    //-----------------------------------------------------
    // Read
    // db.collection('tasks').findOne({ _id: new ObjectID("602d98e0181e3f06126e9e46") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch the data!')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    //     console.log(task)
    // })
    // db.collection('users').findOne({ _id: new ObjectID("602db169fe9795078b70cbdc") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(count)
    // })

    //------------------------------------------------------------
    // Create
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Cooking',
    //         completed: false
    //     },{
    //         description: 'Contact HD Telecom',
    //         completed: false
    //     },{
    //         description: 'Wash the dishes',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to create the tasks')
    //     }

    //     console.log(result.ops)
    // })


//})
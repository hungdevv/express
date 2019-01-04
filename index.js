const express = require('express')
const app = express()
const port = 3000

const userRoute = require('./routes/user.route')

const bodyParser = require('body-parser')
// const shortid = require('shortid')

// const db = require("./db")

// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')

// const adapter = new FileSync('db.json')
// const db = low(adapter)

// // Set some defaults (required if your JSON file is empty)
// db.defaults({  users: []})
//   .write()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

// var users = [
//     {id: 1, name: 'hung'},
//     {id: 2, name: 'ha'}
// ]

app.set('view engine', 'pug')
app.set('views', './views')
  
app.get('/', (req, res) => res.render('home'))
app.get('/index', (req, res) => res.render('index'))
app.get('/home', (req, res) => res.render('home'))
// // app.get('/haha', (req, res) => res.render('haha', {
// //     age: [
// //         {id: 1, name: 'hung'},
// //         {id: 2, name: 'ha'}
// //     ]
// // }))
// app.get('/hehe', (req, res) => res.render('Hehe'))
// app.get('/app', (req, res) => res.send('Hello'))

// app.get('/users', (req, res) => res.render('users', {
//     users: db.get('users').value()
// }))
// console.log(db.get('users').value());
// app.get('/users/search', (req, res) => {
//     var q = req.query.q;
//     console.log(q);
//     var matchedUsers = db.get('users').value().filter(users => users.name.toLowerCase().indexOf(q.toLowerCase())!==-1)
//     res.render('search', {
//         users: matchedUsers,
//     })
//     res.redirect("/users")
// })

// app.get('/users/create', (req, res) => {
//     res.render('create')
// })

// app.get('/users/:abcdfsd', (req, res) => {
//     var id = req.params.abcdfsd

//     var user = db.get('users').find({id: id}).value()

//     res.render('view', {
//         user: user
//     })
// })

// app.post('/users/create', (req, res) => {
//     req.body.id = shortid.generate()
//     // console.log(req.body)
//     // users.push(req.body)
//     db.get("users").push(req.body).write()
//     // db.get('users').push('1').write()
//     res.redirect('/users')
// })

app.use('/users', userRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
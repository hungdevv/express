const db = require("../db");
const shortid = require('shortid');

module.exports = {
    index: (req, res) => res.render('users', {
        users: db.get('users').value()
    }),

    search: (req, res) => {
        var q = req.query.q;
        console.log(q);
        var matchedUsers = db.get('users').value().filter(users => users.name.toLowerCase().indexOf(q.toLowerCase())!==-1)
        res.render('search', {
            users: matchedUsers,
        })
        res.redirect("/users")
    },

    create: (req, res) => {
        res.render('create')
    },

    idd: (req, res) => {
        var id = req.params.abcdfsd
    
        var user = db.get('users').find({id: id}).value()
    
        res.render('view', {
            user: user
        })
    },

    postcreate:  (req, res) => {
        req.body.id = shortid.generate()
        // console.log(req.body)
        // users.push(req.body)
        var errors = []
        if(!req.body.name){
            errors.push('Name is required')
        }
        if(!req.body.phone){
            errors.push('Phone is required')
        }
        if(isNaN(req.body.phone)){
            errors.push('Phone is not number')
        }
        if(errors.length){
            res.render('create', {
                errors: errors,
                values: req.body
            })
            return
        }
        db.get("users").push(req.body).write()
        // db.get('users').push('1').write()
        res.redirect('/users')
    }
}
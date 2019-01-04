module.exports.postCreate = (req, res) => {
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
    next()
}
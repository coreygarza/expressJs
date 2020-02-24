
exports.get_landing = function(req, res, next){
    res.render('landing', {title:'Corey controller'});
}

exports.submitLead = function(req, res, next){
    console.log("Lead Email:" , req.body.email_lead);
    res.redirect('/');
}
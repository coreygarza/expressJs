
exports.index = function(res, req, next){
    res.render('index', {title:'Corey controller', breadcrumb:'ccc'});
}
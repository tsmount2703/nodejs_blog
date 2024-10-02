const { enabled } = require("express/lib/application");

module.exports = function SortMiddleware(req, res, next){
    
    res.locals._sort = {
        enabled: false,
        type:"default",
        column: "default"
    }

    if(req.query.hasOwnProperty('_sort')){
        // req.locals._sort.enabled = true;
        // req.locals._sort.type = req.query.type || "default";
        // req.locals._sort.column = req.query.column || "default"


        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type || "default",
            column: req.query.column || "default"
        })
    }
    
    next();
}
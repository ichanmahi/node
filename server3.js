const express=require('express')
const Expression = require('expression')
const app=express()
let honey={
    name:'wild honey',
    mrp:500.,
}
app.get('/',function(req,res){
    res.json(honey)
    })
    app.listen(8085)
const express = require('express')
var app = module.exports = express();

app.use(express.json());

console.log("Start....")

app.post( '/case', function ( req, res) {
    console.log(JSON.stringify(req.body))
    res = res.status(200);
    res = res.type('application/json');

    let beforeImage = req.body.beforeImage
    let data = req.body.currentImage


    data.extensions = data.extensions || {}
    if (data.serviceTeam &&
        beforeImage.serviceTeam &&
        data.serviceTeam.id != beforeImage.serviceTeam.id) {
            console.log("Team changed")
            delete data.processor
    }
    
    console.log(data)
    let body = {
        data: data
    }
    console.log(JSON.stringify(body))
    res.send(body);
})



if (!module.parent) {
    app.listen( process.env.PORT || 4000)
    console.log('Express started....');
}
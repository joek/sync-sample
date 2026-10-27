const express = require('express')
var app = module.exports = express();

const bodyLimit = process.env.BODY_LIMIT || '10mb';
app.use(express.json({ limit: bodyLimit }));
app.use(express.urlencoded({ extended: true, limit: bodyLimit }));

console.log("Start....")

app.post( '/hook', function ( req, res) {
    console.log(JSON.stringify(req.body))
    res = res.status(200);
    res = res.type('application/json');

    let data = req.body.currentImage

    
    console.log(req.body)
    let body = {
        data: data
    }
    res.send(body);
})

app.use((err, req, res, next) => {
    if (err && err.type === 'entity.too.large') {
        return res.status(413).json({
            error: 'Payload too large',
            limit: bodyLimit
        });
    }
    next(err);
});



if (!module.parent) {
    app.listen( process.env.PORT || 4000)
    console.log('Express started....');
}
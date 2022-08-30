
const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/public',express.static('public'))

const workingHours = (req, res, next) =>{
    const date = new Date();
    const days = date.getDate();
    const hour = date.getHours();
    const daysOff=[0,6];
    const workingHours = [9, 10, 11, 12, 13, 14, 15, 16]

    if(daysOff.includes(days)){
        res.redirect('/offdays-hours')
    } else if(!workingHours.includes(hour)){
        res.redirect('/offdays-hours')
    }

    next();

};
    app.get('/offdays-hours', (req, res)=> {
        res.render('offdays-hours.pug');
    });

    app.get('/offdays-hours', (req, res)=> {
        res.render('offdays-hours.pug');
    });

app.use(workingHours);

app.get('/name/:user_name', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<html><body>' +
    '<h1>Hello ' + req.params.user_name + '</h1>' +
    '</body></html>'
    );
  });

app.get('/', function (req, res)  {
    res.render('layout.pug');
});
app.get('/Home_page',(req,res)=>{
    res.render("Home_page.pug",{img:"public/images/home-page.png"})
});

app.get('/About_us',(req,res)=>{
    res.render("About_us.pug",{img:"public/images/About-us.jpg"})
});

app.get('/Services',(req,res)=>{
    res.render("Services.pug",{img:"public/images/servizi.png"})
});
app.listen(port ,() =>{
    console.log('The server is running and listening to port,' + 'please, open your browser  http://localhost:%s', port);
});
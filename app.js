const express = require('express');
const app = express();
const port = 3000;
app.use('/css', express.static('css'));
const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes',
    'I love reading'
];
const bodyParser = require('body-parser');



// app.get('/', (req, res) => res.send('Web Notes'))
// app.use('/', express.static('view'))
app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/notes', (req, res) => { 
    myNotes.push(req.body.note);
    res.redirect('/');
  });
  

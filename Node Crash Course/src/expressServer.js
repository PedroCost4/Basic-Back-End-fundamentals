const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs')

//listen for requests
app.listen(3000, () => {
    console.log('Express server listening on port 3000');
})

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));



app.get('/', (req, res) => {
    const blogs = [
        
    ];
    res.render('index', 
    {
        title: 'Home',
        name: 'Pedro',
        blogs
    });
});

app.get('/about', (req, res) => {
    res.render('about',
    {
        title: 'About',
        name: 'Pedro'
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create',
    {
        title: 'Create a new blog',
        name: 'Pedro'
    });
});

//redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//404 page
app.use((req, res) => {
    res
    .status(404)
    .render('404',
    {
        title: '404',
    });
});



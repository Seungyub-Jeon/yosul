const path = require('path');

const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public')); // middleware

app.use(authRoutes); // middleware

app.listen(3001, () => {    
    console.log('Server started on port 3001');
    }
);
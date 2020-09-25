const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost/biblioteca',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('BD conectada'))
.catch(err => console.log(err));
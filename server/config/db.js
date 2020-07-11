//27017
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://jayesh:Jinucool@12345@cluster0.wdbco.mongodb.net/<dbname>?retryWrites=true&w=majority',
 { useNewUrlParser: true });

mongoose.connection.on('error',err=>{
    console.log(err);
});
mongoose.connection.on('connected',res=>{
    console.log('connected');
});

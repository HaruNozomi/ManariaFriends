const express = require('express');
const Miku = express();

Miku.set('Miku',3000);

Miku.use(express.static(__dirname + '/public'));
Miku.use(express.static(__dirname + '/App'));

Miku.get('/',(req,res)=>{
res.sendFile(__dirname + '/public/Jun.html');
});

Miku.get('/Anee',(req,res)=>{
res.sendFile(__dirname + '/public/Sora.html');
});

Miku.get('/Lala',(req,res)=>{
res.sendFile(__dirname + '/public/Nozomi.html');
});

Miku.listen(Miku.get('Miku'),()=>{
console.log('Gotoubou Hanayome');
});

let path=require('path');
let express=require('express');

let app=express();
const PORT=process.env.PORT || 3000;

// for static folder route
let staticPath=path.join(__dirname,'../public')
app.use(express.static(staticPath));

// for dynamic contants
app.set('view engine','ejs');


// middle wear
app.use((req,res,next)=>{
    next();
})

// for static rout
app.get('/',(req,res)=>{
    res.sendFile(path.join(staticPath,'index.html'));
})
// for dynamic rout
app.get('/home',(req,res)=>{
      fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then(data=>{
   
// ***** all ways .then under dynamically create hoi jamon ticket bookin a o .then under e createhoa cholo
res.render('home.ejs',{
     url:'https://images.unsplash.com/photo-1713432924449-c01531ef3821?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url1:'https://plus.unsplash.com/premium_photo-1675440682547-d3be56f91621?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url2:'https://plus.unsplash.com/premium_photo-1714367960765-3ed9846b71e9?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    // api data pass in ejs
    data:data.products
})
  })
 
 
})

app.get('/about',(req,res)=>{
    res.render('about.ejs',{
        url2:'https://images.unsplash.com/photo-1713432924449-c01531ef3821?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       url:'https://plus.unsplash.com/premium_photo-1675440682547-d3be56f91621?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       url1:'https://plus.unsplash.com/premium_photo-1714367960765-3ed9846b71e9?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
})
})

app.get('/about/:names',(req,res)=>{
// use case of params in api value render

    fetch(`https://dummyjson.com/products/search?q=${req.params.names}`)
.then(res => res.json())
.then(data=>{
    // .then under res.render then api data pass in ejs else eror
    res.render('aboutParams.ejs',{
        url:'https://images.unsplash.com/photo-1713432924449-c01531ef3821?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       url1:'https://plus.unsplash.com/premium_photo-1675440682547-d3be56f91621?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       url2:'https://plus.unsplash.com/premium_photo-1714367960765-3ed9846b71e9?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      data:data.products

    } )

})

})

 


 app.get('/cart',(req,res)=>{
    res.render('cart.ejs' )
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs' )
}) 

app.get('*',(req,res)=>{
    res.render('Error404.ejs',{
error:'opps pagr not found'
    })
})

// listen on server
app.listen(PORT,'127.0.01',()=>{
    console.log('ok');
})
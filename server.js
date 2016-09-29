var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    articleone : { 
    title : 'Article One by  Gayatri' ,
    heading : 'Article one' ,
    content : `<p>
                    This is my first articlethat  ever published. I am excited to see this on web!
               </P>
                <p>
                    In this I am going to describe about article one..
              </p>`
    },
    articletwo : {title : 'Article Two by  Gayatri' ,
    heading : 'Article one' ,
    content : `<p>
                    This is my second article that ever published. I am excited to see this on web!
               </P>
                <p>
                    In this I am going to describe about article two..
              </p>`},
    articlethree : {title : 'Article Three by  Gayatri' ,
    heading : 'Article one' ,
    content : `<p>
                    This is my third article that ever published. I am excited to see this on web!
               </P>
                <p>
                    In this I am going to describe about article three..
              </p>`}

};
function  createHtmlTemplate(data)
{
    
var title = data.title;
var heading = data.heading;
var content = data.content;

var htmltemplate = `
    <html>
       <head>
         <tiltle>
              ${title}
         </title>
         <meta name = "viewport" content = "width=device-width" , initial-scale = 1" />
         <link href="/ui/style.css" rel="stylesheet" />
       </head>
       <body>
           <div class = "container">
               <div>
                   <a href = "/"> Home </a>
               </div>
               <hr/>
               <h3>
                   ${heading}
               </h3>
               <div>
                    ${content}
               </div>
            </div>
        </body>
    </html>
    `;
    return htmltemplate;
   }            

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//app.get('/:articleName', function(req,res){
 //   var articleName = req.params.articleName;
 //  res.send(createHtmlTemplate(articles[articleName])); 
//});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter = 0;
app.get('/counter', function(req,res){
counter = counter + 1;
res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

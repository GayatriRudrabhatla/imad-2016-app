var button = document.getElementById('counter');

button.onclick = function()
{
    //Create request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response
    request.onreadystatechange = function()
   {
      // alert('Entered to onreadystatechange');
        if(request.readyState === XMLHttpRequest.DONE)
    {
       // alert('Request done');
        if(request.status === 200)
        {
            var counter = request.responseText;
           // alert(counter.toString());
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
        };  
    //Make Request
    request.open('GET','http://gayatrirudrabhatla.imad.hasura-app.io/counter', true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var submit = document.getElementById('submit-btn');

submit.onclick= function()
{
    //IT has to request the server and send the name and has to capture the list of data
     var request = new XMLHttpRequest();
    
    //Capture the response
    request.onreadystatechange = function()
   {
      
     if(request.readyState === XMLHttpRequest.DONE)
    {
       
        if(request.status === 200)
        {
            
            var names = JSON.parse(request.responseText);
            
            var list = '';
            for(var i = 0; i < names.length ; i++)
            {
                list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }
    }
    
        };  
    //Make Request
    var name = nameInput.value;
    request.open('GET','http://gayatrirudrabhatla.imad.hasura-app.io/submit-name?name=' + name , true);
    request.send(null);
};
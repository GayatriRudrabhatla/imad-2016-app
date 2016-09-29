var button = document.getElementById('counter');

button.onclick = function()
{
    //Create request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response
    request.onreadystatechange = function()
   {
        if(request.readyState() === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            var counter = request.ResponseText;
            alert(counter.toString());
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
        };  
    //Make Request
    request.open('GET','http://gayatrirudrabhatla.imad.hasura-app.io/counter', true);
    requset.send(null);
    

};

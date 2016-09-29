var button = document.getElementById('counter');
var counter = 0;

button.onclick = function()
{
    //Create request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response
    
    if(request.readyState() === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            var counter = request.responseText();
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
   //Render correct value to the counter 
   // counter = counter + 1;
    //var span = document.getElementById('count');
    //span.innerHTML = counter.toString();
};

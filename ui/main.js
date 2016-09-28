console.log('Loaded!');

// changing text of a main text
var element = document.getElementById('main-text');
element.innerHTML = 'Welcome..';

//Moving the picture
var pic = document.getElementById('madi');
var marginLeft = 0;

function  move()
{
   marginLeft = marginLeft + 5;
   pic.style.maginLeft = marginLeft+'px';
}

pic.onclick = function()
{
    var interval = setInterval(move,50);
};


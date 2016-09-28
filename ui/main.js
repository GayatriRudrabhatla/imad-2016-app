console.log('Loaded!');

// changing text of a main text
var element = document.getElementById('main-text');
element.innerHTML = 'Welcome..';

//Moving the picture
var pic = document.getElementById('madi');
var marginLeft = 0;
var marginRight = 0;
var i = 0;
function  move()
{
  while(i<=5)
  {
    alert("Entered");      
   marginLeft = marginLeft + 5;
   pic.style.maginLeft = marginLeft+'px';
   i++;
  }
  while(5<i<10)
  {
      marginRight = marginRight + 5;
      pic.style.marginRight = marginRight+'px';
      i++;
  }
  if(i==10)
  {
      i = 0;
  }
}

pic.onclick = function()
{
    var interval = setInterval(move,50);
};


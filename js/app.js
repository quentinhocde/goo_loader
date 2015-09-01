
var ball = document.getElementById('ball');
var wrapper = document.getElementById('wrapper');
var launch;

document.addEventListener("DOMContentLoaded", function(event) { 
//	wrapper.addEventListener('click',createBall);	
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  
  var create = true;
	var i = 0;
  function raf() {
    if(i%25==0){
      createBall();
    }   
    i++;

    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

});


function createBall(e){
	launch=true;
	var myBall = new Ball('50%','50%');
	myBall.display();
}


function Ball(x,y){
	this.left=x;
	this.top=y;
}


Ball.prototype.display = function(){
	var self = this;

	var ball1 = document.createElement("DIV");                
	ball1.classList.add('ball1');
	ball1.style.left = this.left;
	ball1.style.top = this.top;
  
  setTimeout(function(){
    wrapper.appendChild(ball1);
    var aleaY;
	 var aleaX;

	  aleaY = Math.round((Math.random()*200-100));
	  aleaX = Math.round((Math.random()*200-100));

	  var a = Math.abs(aleaX);
	  var b = Math.abs(aleaY);

	  var c;

	  c = (a*a)+(b*b);
	  c = Math.sqrt(c);
	  c = (c*100/150)/100;
	  c = 1-c;
 	
	  TweenLite.to(ball1,3,{y:aleaY,x:aleaX,scale:c,onComplete:ballMove,onCompleteParams:[ball1],ease:Bounce.easeIn,delay:0.5});
    
  },300);
}

function destroy(myBall){
	wrapper.removeChild(myBall);
  
}

function ballMove(myBall){
	
		TweenLite.to(myBall,2,{y:'-50%',x:'-50%',top:'50%',left:'50%',scale:0.7,onComplete:destroyBall,ease:Quad.easeInOut});
		function destroyBall(){
			destroy(myBall);
		}

}


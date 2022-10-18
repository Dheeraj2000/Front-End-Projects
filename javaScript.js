window.onload = function () {
    
    var images = document.querySelectorAll(".artThumb");
    for (var i = 0; i < images.length; i++) {
	images[i].onmouseover = function() {
	    var newNode = document.createElement("img");
	    var oldsrc=this.src;
	    var parts=oldsrc.split("/");
	    newNode.src="images/" + parts[parts.length-1];
	    newNode.style="border:solid 2px green;";
	    newNode.className='bigImg';
	    this.parentNode.appendChild(newNode);
		console.log(this.src);
		transform: scale(1.5);
        
    //var html='<p class="para" id="para">Hello</p>';
    //document.querySelector('.bigImg').insertAdjacentHTML('beforeend',html);
    //document.getElementById('para').innerHTML='This is an image of Amrita Shergil';
    
	}
	images[i].onmouseout = function(){
	    var images = document.querySelectorAll(".bigImg");
	    for (var i=0; i < images.length; i++){
		images[i].parentNode.removeChild(images[i]);
	    }

}
    }
}
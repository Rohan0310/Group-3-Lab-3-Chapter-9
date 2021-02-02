/* add code here */
window.addEventListener('load', function() 
 {
	var thumbs = document.getElementById("thumbnails");
       var element = document.querySelector('figcaption');
       
       thumbs.addEventListener("click", function (a)
      {

       if (a.target.nodeName.toLowerCase() == 'img') 
       {
            var clickedImageSource = a.target.src;

	        var newSrc = clickedImageSource.replace("small", "medium");           


     	    var featuredImage = document.querySelector("#featured img");
       		featuredImage.src = newSrc;
       		featuredImage.title = a.target.title;
       		element.innerHTML = a.target.title;
 	
       		
        }
       }); 
 });
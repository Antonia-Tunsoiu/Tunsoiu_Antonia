var slide=document.getElementById("slideshow")
slide.addEventListener("dblclick", SlidePhotos)

function SlidePhotos()
{
	let slideIndex = 0;
	showSlides();

	function showSlides() 
	{
  	let i;
  	let slides = document.getElementsByClassName("pictures");
  	for (i = 0; i < slides.length; i++) 
		{
    		slides[i].style.display = "none";
  		}
  	slideIndex++;
  	if (slideIndex > slides.length) 
		{
		slideIndex = 1
		}
  	slides[slideIndex-1].style.display = "block";
  	setTimeout(showSlides, 3000); 
	}
}



document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".form").style.display= "flex"; 
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".form").style.display = "none";
})
document.querySelector(".formBtn").addEventListener("click", function(){
    document.querySelector(".form").style.display = "none";
})

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log([...formData]);
    fetch('https://getform.io/f/bpjmjvqb', {
        method: 'POST',
        body: formData,
        headers:{
            "Accept":"application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
       
        
    })
    .catch((error) => {
        console.error('Error:', error);

    });
})



document.getElementById('cnt-one').addEventListener('click', function() {
    var image = document.getElementById('myimage');
    image.src = "images/image1.jpeg"; 
});

document.getElementById('cnt-two').addEventListener('click', function() {
    var image = document.getElementById('myimage');
    image.src = "images/image2.jpg"; 
});
document.getElementById('cnt-three').addEventListener('click', function() {
    var image = document.getElementById('myimage');
    image.src = "images/image.png"; 
});






$('.ourSlide').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    navText:[],
      autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }

    }
})
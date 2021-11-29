
// função para gerar o gráfico

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Hidráulica',         14.58],
      ['Témica-Outros',       2.3688],
      ['Eólica',              2.3712],
      ['Térmica a Gás/GNL',   2.3016],
      ['Térmica a Biomassa',  1.7088],
      ['Solar Fotovoltáiva',  0.4128],
      ['Térmica Nuclear',     0.2568]
    ]);

    var options = {
      title: 'Gráfico Energia Utilizada',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('grafico_3d'));
    chart.draw(data, options);
  }

// Evento para o click do botao
  window.onload = () => 
  {
    
    var listabotao = document.querySelectorAll("button.btn")
      listabotao.forEach(botao =>
        { 
            botao.addEventListener ("click", (eventoclickbotao)=>
            { 

                eventoclickbotao.preventDefault()
                location.href=eventoclickbotao.target.id+"\\"+eventoclickbotao.target.id+'.html'

            })

        })
        
  }

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }


  // var slideIndex = 1;
  // showSlides(slideIndex);
  
  // // Next/previous controls
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // // Thumbnail image controls
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // function showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  // }

  // var slideIndex = 0;
  // showSlides();
  
  // function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}
  //   slides[slideIndex-1].style.display = "block";
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // }



// const lista=[
//   {'hidrica1','hidrica'}
// {'a2',''}
// ]
 

  // function chamarGeotermica(e){
   
  //   e.preventDefault()
  //   location.href="geotermica/geotermica.html"

    

     
  // }


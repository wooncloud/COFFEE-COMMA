$(document).ready(function(){
    let option = {
        fullWidth: true,
        indicators: true
    }
    $('.carousel').carousel(option);
    $('.sidenav').sidenav();

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 5000);
  });
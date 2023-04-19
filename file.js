document.querySelector('.slideBox').style.display = 'none';
$(".slideToggle").click(function (e) {
    $(".slideBox").slideToggle();
    $(".slideToggle").toggleClass('active')
});

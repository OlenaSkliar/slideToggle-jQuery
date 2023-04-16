document.querySelector('.slideBox').style.display = 'none';
$(".slideToggle").click(function (e) {
    $(".slideBox").slideToggle();
    $(".slideToggle").toggleClass('active')
});
$(".slideBox .close").click(function (e) {
    $(".slideBox").slideToggle();
    $(".slideToggle").toggleClass('active')
});
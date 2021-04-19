$(document).ready(function() {
    $('.icon-holder.one').click(function (){
        $('.one').hide()
        $('.content-one').show();
    })
    $('.icon-holder.two').click(function (){
        $('.two').hide();
        $('.content-two').show();
    })
    $('.icon-holder.three').click(function (){
        $('.three').hide();
        $('.content-three').show();
    })
    $('.icon-content.content-one').click(function (){
        $('.content-one').hide()
        $('.one').show();
    })
    $('.icon-content.content-two').click(function (){
        $('.content-two').hide()
        $('.two').show();
    })
    $('.icon-content.content-three').click(function (){
        $('.content-three').hide()
        $('.three').show();
    })
});
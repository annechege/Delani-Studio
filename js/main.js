$(document).ready(function() {
    var elem = this;
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
});
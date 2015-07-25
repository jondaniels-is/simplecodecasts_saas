// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .




$(document).ready(function(){
    $('.fade').hide();
    
    var c = $('.alert').css("color");
    var bc = $('.alert').css("background-color")
    
    var i = function(){
        $('.alert').before("<div class='circle-icon'><i class= 'fa fa-check-circle fa-2x alert-close'><i></div>")
        $('.fa-check-circle').css({"color":c})
        $('.circle-icon').css({"background-color":bc})
        $('.alert-close').hide();
        $('.circle-icon').hide();
    };
    
    var AlertIn = function(){
        $('.fade').hide();
        $('.alert').hide();
        $('.alert').addClass(' text-center large-text');
        $('.fade').fadeIn(150, function(){
            $('.alert').fadeIn(250);
            $('.alert-close').fadeIn(250);
            $('.circle-icon').fadeIn(250);
            });
    };
    
    var hover = function(){
         $('.alert-container').hover(function(){ 
             $('.alert-close').fadeTo(450, 0.5); 
             //$('.alert').fadeTo(200,0.5); 
             
         },function(){ 
             $('.alert-close').fadeTo(650, 1);
             //$('.alert').fadeTo(50,1);
         });
        
    };
        
        var AlertOut = function() {
        $('.alert').fadeOut(350);
        $('.fade').fadeOut(450);
        $('.alert-close').remove();
        $('.alert').remove();
        $('.circle-icon').remove();
    };
    
    var click = function(){
        $('.alert-container').on('click', AlertOut);
    };
    
    var keypress = function(){
        $(document).keypress(AlertOut);
    }
    
    
    if ($('.alert')[0]){
        i();
        AlertIn();
        hover();
        click();
        keypress();
        
    }
    else{
        $('.fade').hide();
        $('.alert').removeClass(' text-center large-text')
    }
    
    
});



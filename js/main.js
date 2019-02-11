

$(document).ready(function(){

$(".color-picker-group .dropdown-menu").mCustomScrollbar({
      callbacks:{
        whileScrolling:function(){
            $('body').addClass('stop-pagescroll');
        },
        onScroll: function(){
          setTimeout(function(){
            $('body').removeClass('stop-pagescroll');
          },200);
        },
        onScrollStart:function(){
            $('body').addClass('stop-pagescroll');
        },
      }
  });

  $('.color-picker-group input').on('click', function(){

    $.ajax({
      type: 'get',
      url: 'js/colors.json',
      success: function (response) {

        var resArray = response;

        $.each(resArray, function(i, color){
            $('.color-picker-group .dropdown-menu ul').append('<li class="list-inline-item"><div class="box"><h4 class="font-medium">'+resArray[i].name+'</h4><a href="#" data-class="'+resArray[i].name+'" data-color="'+resArray[i].hexString+'"  style="background:'+resArray[i].hexString+'"></a></div></li>');
        });

      }

    });

  });

  $(document).on('click', '.color-picker-group .dropdown-menu li', function(e){
    e.stopPropagation();
  });

  $(document).on('click', '.color-picker-group .dropdown-menu li', function(){
    var colorValue = $(this).attr('data-color');
    $('.color-picker-group input').css('background',colorValue);

  });



});

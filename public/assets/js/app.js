const $ = require('jquery');

require('bootstrap');

$(document).ready(function() {
  $('.catClick').click(function(){
    var name = $(this).data('name');
    $('#catTitle').html(name);
    $.ajax({  
      url: "category/"+name,
      type: 'GET',
      dataType: 'JSON',
      timeout: 15000,
      beforeSend: function(){
        $('#category').html('');
      },
      success: function(obj){  
        if(obj.success == true){
          if(obj.response.totalResults < 1){
            $('#category').html('No place found!');
          }else{
            $.each(obj.response.groups[0].items, function(k, v) {
              $('#category').append('<div class="col-12 col-md-4 mb-3">'+
                '<div class="card text-white bg-primary">'+
                  '<div class="card-header">'+v.venue.name+'</div>'+
                  '<div class="card-body">'+
                    '<p class="card-text">Tips: '+v.venue.stats.tipCount+' | Users: '+v.venue.stats.usersCount+' | Check-in\'s: '+v.venue.stats.checkinsCount+' | Visits: '+v.venue.stats.visitsCount+'</p>'+
                    '<p class="card-text">Address: '+v.venue.location.address+', '+v.venue.location.country+'</p>'+
                    '<p class="card-text"><a href="#" class="text-white" onclick="window.open(\'https://www.google.com/maps/search/?api=1&query='+v.venue.location.lat+','+v.venue.location.lng+'\', \'_blank\');">Open in Google Maps</a></p>'+
                  '</div>'+
                '</div>'+
              '</div>');
            });
          }
        }else{
          alert("İşlemde sorun oluştu!\rLütfen tekrar deneyiniz.");
        }        
      },
      error: function(){
        alert("İşlemde sorun oluştu!\rLütfen tekrar deneyiniz.");
      },
      complete: function(){
        $("html, body").animate( { scrollTop: "0" }, 300); 
      }
    });
  });
});

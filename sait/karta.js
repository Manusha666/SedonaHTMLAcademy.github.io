function initialize() {
  var myLatlng = new google.maps.LatLng(100.00,100.00);
  var myOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
 var  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        var myLatLng = new google.maps.LatLng(100.00,100.00);
   var marker = new google.maps.Marker({
          position: myLatLng,
          title: 'Magazin',
          map: map

  });

google.maps.event.addListener(marker, 'click', function() {
document.getElementById("table").style.width ='80%'; 
map.setZoom(13); 
myLatlng =  new google.maps.LatLng(marker.getPosition());

});}
var countChecked = function() {
  var n = $( 'input:checked' ).length;
  $( 'div' ).text( n + ' НАЙДЕНО' );
};
countChecked();
 
$( 'input[type=checkbox]' ).on( 'click', countChecked );


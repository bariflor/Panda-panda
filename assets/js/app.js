// $(document).ready(function(){
// 	$("#equis1"),click(function(){
// 		$(this).hide();
// 	});
// });

$(document).ready(function(){
	$("#mostrar").on( "click", function() {
		$('#contenedor').show(); //muestro mediante clase
		});
	$("#ocultar").on( "click", function() {
		$('#contenedor').hide(); //muestro mediante clase
	});
	// $("#ocultar").on( "click", function() {
	// 	$('#contenedor').hide(); //muestro mediante clase
	// });
});


// USAR animate.css
// .add Class("animate Fade Out");
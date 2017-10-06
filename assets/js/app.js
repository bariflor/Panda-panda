$(document).ready(function(){
	$("#mostrar").on( "click", function() {
		$('.card').show(); //muestro mediante clase
		});
	$("#ocultar").on( "click", function() {
		$('.card').hide(); //muestro mediante clase
	});
	$("#cerrar1").click(function(){
    $("#car1").hide(1000);
    });
    $("#cerrar2").click(function(){
    $("#car2").hide(1000);
    });
    $("#cerrar3").click(function(){
    $("#car3").hide(1000);
    });
});


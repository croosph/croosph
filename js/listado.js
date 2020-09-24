$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.lista-categorias .categoria_item[category="book"]').addClass('categoria-activa');
	// FILTRANDO PRODUCTOS  ============================================
	$('.foto-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.foto-item').hide();
		} setTimeout(hideProduct,400);
		
	function showProduct(){
		$('.foto-item[category="book"]').show();
		$('.foto-item[category="book"]').css('transform', 'scale(1)');
	} setTimeout(showProduct,400);

	$('.categoria_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.categoria_item').removeClass('categoria-activa');
		$(this).addClass('categoria-activa');

		// OCULTANDO PRODUCTOS =========================
		$('.foto-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.foto-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.foto-item[category="'+catProduct+'"]').show();
			$('.foto-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	/*$('.categoria_item[category="all"]').click(function(){
		function showAll(){
			$('.foto-item').show();
			$('.foto-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});*/
});
// event pada link

$('.page-scroll').on('click', function() {

	// ambil isi href this cuma saya klik
	var tujuan = $(this).attr('href');
	// console.log(tujuan); cek href apakah kesangkut

	var elementTujuan = $(tujuan);
	// console.log(elementTujuan);

	$('body').animate({
		$('this').on('.page-scroll')
	}, 1000);

	// e.preventDefault();

});
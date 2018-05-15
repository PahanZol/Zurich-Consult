var quote=["Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает", 
"Наши специалисты предоставят вам квалифицированную юридическую помощь",
"Разрулим и порешаем любую движуху",
"Лорем ипсум долор сит амээт"];

var imageUrl=["img/header.jpg","img/c7fu4cM.jpg","img/city-night-lights-3_www.FullHDWpp.com_.jpg","img/header.jpg"]
$(".infoblock p").text(quote[0]);
$(".num").eq(0).css("opacity","1");

$(".plus").click(function(){
	$(".num").fadeTo( 300, 0.0 );
	$(".num").eq( $(this).index()).fadeTo( 300, 1.0 );
	$(".infoblock p").fadeTo( 0, 0.0 ).text(quote[$(this).index()]).fadeTo( 500, 1.0 );
	$("header").css('background-image', 'url(' + imageUrl[$(this).index()] + ')');
})

$(".read-more").on("click", function(){
	$(this).parent().siblings(".news-content").toggleClass("news-content_show-more");
	$(this).text()===$(this).data("closed") ? $(this).text($(this).data("opened")) : $(this).text($(this).data("closed"));
	$(this).parent().parent().toggleClass("readmore");
});

$(".menu-icon").on("click", function(){
	$("nav").toggleClass("menu-item_active");
	$line1 = $(this).find("#menu-icon__line1");
	$line2 = $(this).find("#menu-icon__line2");
	$line3 = $(this).find("#menu-icon__line3");
	if ($line2.css("display")=="none") $line2.delay(100).show(0);
	else $line2.delay(30).hide(0);
	$line1.toggleClass("active1");
	$line3.toggleClass("active3");

	
});



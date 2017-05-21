function initialPage() {
	$("textarea, .submitBtn, .yesBtn, .noBtn, #imgPreview, .submitPhotoBtn").hide();
	// $('body').removeClass('.lightOrange')
}

function renderDescPage() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$(".ans1, .ans2").hide();
	$(".question").text("Description:")
	$("textarea, .submitBtn").show();

}

function addPhotoOption(){
	$('textarea, .submitBtn').hide();
	$('body').removeClass('lightOrange').addClass('lightPurple');
	$('.question').text('Would you like to include a photo?');
	$('.yesBtn, .noBtn').show();
}

function downloadPhoto(){
	$('.yesBtn, .noBtn, .question').hide();
	$('body').removeClass('lightPurple').addClass('lightGray');
	$('#imgPreview, .submitPhotoBtn').show();
}




$(".ans1, .ans2").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	renderDescPage();
})

$('.submitBtn').on('click', function(event){
	addPhotoOption();
})

$('.yesBtn').on('click', function(event){
	downloadPhoto();
})

$('.submitPhotoBtn').on('click', function(event){

})



$(function() {
	initialPage();
});

// hide all components not being used
function initialPage() {
	$( "#submitBtn_Street_Address, #submitBtn_City, #submitBtn_State , #submitBtn_Zip, #submitBtn_Email , #submitBtn_Phone , #submitBtn_DateofBirth, #submitBtn_female, #submitBtn_male,#submitBtn_single, #submitBtn_married, #submitBtn_Checked, #submitBtn_Income, #Street_Address, #city, #state, #zip , #phone, #email, #dateOfBirth, #income").hide();
	// $('body').removeClass('.lightOrange')
}
//finctions to change eac screen
function Street_Address() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_Name, #name").hide();
	$(".question").text("Street Address:");
	$("#submitBtn_Street_Address, #Street_Address").show();
}

function City() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_Street_Address, #Street_Address").hide();
	$(".question").text("City");
	$("#submitBtn_City, #city").show();
}
function State() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_City, #city").hide();
	$(".question").text("State");
	$("#submitBtn_State, #state").show();
}

function Zip() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_State, #state").hide();
	$(".question").text("Zip");
	$("#submitBtn_Zip, #zip").show();
}

function Email() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_Zip, #zip").hide();
	$(".question").text("Email");
	$("#submitBtn_Email, #email").show();
}
function Phone() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_Email, #email").hide();
	$(".question").text("Phone");
	$("#submitBtn_Phone, #phone").show();
}
function DateofBirth() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_Phone, #phone").hide();
	$(".question").text("Date of Birth");
	$("#submitBtn_DateofBirth, #dateOfBirth").show();
}
function Gender() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_DateofBirth, #dateOfBirth").hide()
	$(".question").text("Gender");
	$("#submitBtn_male, #submitBtn_female").show();
}
function MaritalStatus() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_male, #submitBtn_female").hide();
	$(".question").text("Marital Status");
	$("#submitBtn_single, #submitBtn_married").show();
}
function Income() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_single, #submitBtn_married").hide();
	$(".question").text("Income");
	$("#submitBtn_Income, #income").show();
}
function Checked() {
	$('body').removeClass("lightBlue").addClass('lightOrange');
	$("#submitBtn_Income, #income").hide();
	$(".question").text("Completed");
	$("#submitBtn_Checked").show();
}



//Submit buttons
$("#submitBtn_Name").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Street_Address();
})

$("#submitBtn_Street_Address").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	City();
})

$("#submitBtn_City").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	State();
})

$("#submitBtn_State").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Zip();
})

$("#submitBtn_Zip").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Email();
})

$("#submitBtn_Email").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Phone();
})
$("#submitBtn_Phone").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	DateofBirth();
})
$("#submitBtn_DateofBirth").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Gender();
})
$("#submitBtn_male").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	MaritalStatus();
})
$("#submitBtn_female").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	MaritalStatus();
})
$("#submitBtn_single").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Income();
})
$("#submitBtn_married").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Income();
})
$("#submitBtn_Income").on("click", function(event){
	// event.preventDefault();
	console.log("btn pressed")
	Checked();
})
$("#submitBtn_Checked").on("click", function(event){
	// event.preventDefault();
	window.location.replace("http://stackoverflow.com");
})



$(function() {
	initialPage();
});

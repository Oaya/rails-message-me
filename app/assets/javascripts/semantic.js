//= require jquery
//= require semantic-ui

$(document).on("turbo:load", function () {
	$(".ui.dropdown").dropdown();
});

$(document).on("turbo:load", function () {
	$(".message .close").on("click", function () {
		$(this).closest(".message").transition("fade");
	});
});

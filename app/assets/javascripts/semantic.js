//= require jquery
//= require semantic-ui

scroll_bottom = function () {
	if ($("#messages").length) {
		$("#messages").scrollTop($("#messages")[0].scrollHeight);
	}
};

$(document).on("turbo:load", function () {
	$(".ui.dropdown").dropdown();
	$(".message .close").on("click", function () {
		$(this).closest(".message").transition("fade");
	});
	scroll_bottom();
});

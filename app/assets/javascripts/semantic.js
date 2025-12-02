//= require jquery
//= require semantic-ui

scroll_bottom = function () {
	if ($("#messages").length) {
		$("#messages").scrollTop($("#messages")[0].scrollHeight);
	}
};

submit_message = function () {
	$("#message_body").on("keydown", function (e) {
		if (e.keyCode == 13) {
			$("button").click();
		}
	});
};

$(document).on("turbo:load", function () {
	$(".ui.dropdown").dropdown();
	$(".message .close").on("click", function () {
		$(this).closest(".message").transition("fade");
	});
	submit_message();
	scroll_bottom();
});

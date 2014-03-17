var clippy = {
	addEmailToPage: function() {
		var text = "test_" + Date.now() + "@mailinator.com";
		$('input').val(text);
	}
};

$(document).ready( function () {
	clippy.addEmailToPage();
});

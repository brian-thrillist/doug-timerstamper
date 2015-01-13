var clippy = {
	addEmailToPage: function() {
		var text = "Test_+-." + Date.now() + "@mailinator.com";
		$('input').val(text);
	}
};

$(document).ready( function () {
	clippy.addEmailToPage();
});

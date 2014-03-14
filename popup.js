var clippy = {
	addStuffToClipboard: function() {
		var text = "test_" + Date.now() + "@mailinator.com";
		$('input').val(text);
	}
};

// Run our kitten generation script as soon as the document's DOM is ready.
$(document).ready( function () {
	clippy.addStuffToClipboard();
});

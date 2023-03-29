var bar = $('#password-strength-meter'),
	text = $('#password-strength-text');

$('#password').on('input', function() {
	var val = password.value,
		result = zxcvbn(val),
		score = result.score;

	// Update the password strength meter
	switch (score) {
		case 0:
			$(bar).attr('class', 'progress-bar progress-bar-danger')
				.css('width', '1%');
			break;
		case 1:
			$(bar).attr('class', 'progress-bar progress-bar-danger')
				.css('width', '25%');
			break;
		case 2:
			$(bar).attr('class', 'progress-bar progress-bar-warning')
				.css('width', '50%');
			break;
		case 3:
			$(bar).attr('class', 'progress-bar progress-bar-info')
				.css('width', '75%');
			break;
		case 4:
			$(bar).attr('class', 'progress-bar progress-bar-success')
				.css('width', '100%');
			break;
	}

	// Update the text indicator
	if (val !== "") {
		text.html("<span class='feedback-warning'>" + result.feedback.warning + "</span>" + "<span class='feedback-suggestions'>" + result.feedback.suggestions + "</span>");
	} else {
		text.html("");
	}
});

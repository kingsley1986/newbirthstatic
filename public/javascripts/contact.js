(function ($) {
    "use strict";

function validateForm() {
	var b = document.getElementById("name").value;
	var c = document.getElementById("email").value;
	var d = document.getElementById("message").value;
	var e = grecaptcha.getResponse();

	var f = document.getElementById("phone").value;

	if (
		(
		b == null || b == "",
		c == null || c == "",
		d == null || d == "",
		e == null || e == "",
		f == null || f == ""
        )
	) {
        alert("dkjfdjfdkkfdj")
		return false;
	} else if (e == "") {
		$("#danger-alert").show();
		setTimeout(function () {
			$("#danger-alert").hide();
		}, 5000);
	} else {
		$.ajax({
			url: "/request",
			method: "POST",
			data: $("#prayerequest").serialize(),
			success: function () {
				$("#success-alert").show();
				setTimeout(function () {
					$("#success-alert").hide();
				}, 5000);
				$("#name").val("");
				$("#email").val("");
				$("#message").val("");
				$("#phone").val("");
				grecaptcha.reset();
			},
		});
	}
}

    $(function () {
	    $("form").on("submit", function (e) {
		    e.preventDefault();

		    validateForm();
	    });
    });
})  
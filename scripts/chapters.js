(function() {
	function getParameterByName(name, url) {
		if (!url) {
			url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var posts = [
		{
			title: "HTML Email Development Tools - Introduction",
			url: "https://blog.edmdesigner.com/html-email-development-tools/"
		},
		{
			title: "How to Use Sublime Text for HTML Email Development",
			url: "https://blog.edmdesigner.com/how-to-use-sublime-text-for-html-email-development/"
		},
		{
			title: "How to Use JavaScript for Creating HTML Email Layouts",
			url: "https://blog.edmdesigner.com/how-to-use-javascript-for-creating-html-email-layouts/"
		},
		{
			title: "Visual Email Testing with Developer Tools, Litmus and Email on Acid",
			url: "https://blog.edmdesigner.com/visual-email-testing/"
		},
		{
			title: "Code Quality Tools and Email Client Specific Targeting",
			url: "https://blog.edmdesigner.com/code-quality-tools-and-email-client-specific-targeting/"
		},
		{
			title: "Code Generator Tools Used in HTML Email Development",
			url: "https://blog.edmdesigner.com/code-generator-tools-used-in-html-email-development/"
		},
		{
			title: "Open Source Email HTML Modification Tools for Email Developers",
			url: "https://blog.edmdesigner.com/email-html-modification-tools/"
		},
		{
			title: "CSS Preprocessors and Inlineing in HTML Email Coding"
		},
		{
			title: "Templating Languages in HTML Email Coding"
		},
		{
			title: "Task Automation in Email Development"
		},
		{
			title: "Domain Specific Languages for HTML Emails"
		}
	];

	var actStr = "[You are reading it now]";
	var scripts = document.getElementsByTagName("script");
	var actPostIdx = getParameterByName("p", scripts[scripts.length - 1].src);
	actPostIdx = parseInt(actPostIdx);

	document.write('<div id="posts-toc">');
	document.write('<p>HTML Email Development Tools</p>');

	document.write("<ul>");
	for (var idx = 0; idx < posts.length; idx += 1) {
		var act = posts[idx];

		document.write("<li>");

		if (act.url && idx !== actPostIdx) {
			document.write('<a href="' + act.url + '" target="_blank">');
		}

		document.write(act.title);

		if (idx === actPostIdx) {
			document.write(" [You are reading it right now.]");
		}

		if (act.url && idx !== actPostIdx) {
			document.write("</a>");
		}

		document.write("</li>");
	}
	document.write("</ul>");
	document.write("</div>");
	document.write("<style>#posts-toc{border: 1px solid #e6e6e6;background: #fafafa;padding: 20px;margin: 20px;}</style>");
}());

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
			url: "http://blog.edmdesigner.com/html-email-development-tools/"
		},
		{
			title: "Mastering Sublime Text for HTML Email Development",
			url: "http://blog.edmdesigner.com/mastering-sublime-text-for-html-email-development/"
		},
		{
			title: "Writing Scripts for HTML Emails"
		},
		{
			title: "Browser Developer Tools and HTML Email Testing"
		},
		{
			title: "Code Generator and Modification Tools in HTML Email Development"
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
	document.write('<p>This post is part of the <a href="http://blog.edmdesigner.com/posts/html-email-development-tools">HTML Email Development Tools</a> article series which discusses the following topics:</p>');

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

/*function fileExtension(file)
{
	return file.slice((Math.max(0, file.lastIndexOf(".")) || Infinity) + 1);
}*/

function isURL(str)
{
	var pat = new RegExp("(http|ftp|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");
	return pat.test(str);
}

function loadPage(page)
{
	$("#page-content-wrapper").children().fadeOut( function(){ $(this).empty(); } );
	$("#page-content-wrapper").append("<img src='assets/gfx/ajax-loader.gif'>");
	$(".sidebar-nav a").css("color", "").css("padding-left", "")

	var link = $(".sidebar-nav a[href='#"+page+"']");
	if(link)
	{
		document.title = "Master Sword - Continued :: "+link.text();
		link.css("color", "#CF9139").css("padding-left", "35px")
	}

	switch(page)
	{
		// case "news":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/news.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "json",
		// 		success: function(data) 
		// 		{
		// 			var id;
		// 			for(id = 0; id < data.length; id++)
		// 			{
		// 				var avatar = data[id].avatar;
		// 				var subject = data[id].subject;
		// 				var text = data[id].text;
		// 				var poster = data[id].poster;
		// 				var posterid = data[id].posterid;
		// 				var time = data[id].time;

		// 				$("#page-content-wrapper").append("<div class=content-wrapper><div class=title><img src="+avatar+" class=avatar></img>"+subject+"</div><div class=message><p>"+text+"</p><div class=subTitle>Posted by <a href=http://darkprowless.net:81/phpbb/phpbb3/memberlist.php?mode=viewprofile&u="+posterid+">"+poster+"</a> on "+time+"</div></div>").fadeIn();
		// 			}
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		// case "newsarchive":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/newsarchive.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "json",
		// 		success: function(data) 
		// 		{
		// 			var id;
		// 			for(id = 0; id < data.length; id++)
		// 			{
		// 				var avatar = data[id].avatar;
		// 				var subject = data[id].subject;
		// 				var text = data[id].text;
		// 				var poster = data[id].poster;
		// 				var posterid = data[id].posterid;
		// 				var time = data[id].time;

		// 				$("#page-content-wrapper").append("<div class=content-wrapper><div class=title><img src="+avatar+" class=avatar></img>"+subject+"</div><div class=message><p>"+text+"</p><div class=subTitle>Posted by <a href=http://darkprowless.net:81/phpbb/phpbb3/memberlist.php?mode=viewprofile&u="+posterid+">"+poster+"</a> on "+time+"</div></div>").fadeIn();
		// 			}
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		// case "about":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/about.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "",
		// 		success: function(data) 
		// 		{
		// 			$("#page-content-wrapper").html(data).fadeIn();
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		// case "faq":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/faq.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "",
		// 		success: function(data) 
		// 		{
		// 			$("#page-content-wrapper").html(data).fadeIn();
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		// case "gallery":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/gallery.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "json",
		// 		success: function(data) 
		// 		{
		// 			var id;
		// 			for(id = 0; id < data.length; id++)
		// 			{
		// 				var file = data[id].file;
		// 				var sub = data[id].sub;

		// 				if(isURL(file))
		// 				{
		// 					$("#page-content-wrapper").append("<div class=imageBox><a class='vidGallery' href="+file+" title='"+sub+"'><img src=assets/gfx/video.png></a><div class=subTitle>"+sub+"</div></div>").fadeIn();
		// 				}else{
		// 					$("#page-content-wrapper").append("<div class=imageBox><a class='gallery' href="+file+" title='"+sub+"'><img src="+file+"></a><div class=subTitle>"+sub+"</div></div>").fadeIn();
		// 				}
		// 			}

		// 			$(".gallery").colorbox({
		// 				rel:"gallery", 
		// 				width:"80%", 
		// 				height:"80%"
		// 			});
		// 			$(".vidGallery").colorbox({
		// 				iframe:true,
		// 				rel:"gallery", 
		// 				width:"80%", 
		// 				height:"80%"
		// 			});
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		// case "developers":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/developers.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "",
		// 		success: function(data) 
		// 		{
		// 			$("#page-content-wrapper").html(data).fadeIn();
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		// case "downloads":
		// 	jQuery.ajax({
		// 		url: "scripts/pages/downloads.php",
		// 		type: "POST",
		// 		data: "",
		// 		dataType: "",
		// 		success: function(data) 
		// 		{
		// 			$("#page-content-wrapper").html(data).fadeIn();
		// 		},
		// 		error: function(xhr, status, error) 
		// 		{
		// 			console.log(xhr.responseText);
		// 		},
		// 	});
		// 	break;

		default:
			$("#page-content-wrapper").append("<p>She's dead Jim.</p>").fadeIn();
			break;
	};

	var history = "index.php";
	window.history.pushState("", "", history+"?page="+page);
	$("#page-content-wrapper img").remove();
}

function getParam(name)
{
	var param = new RegExp("[\?&]"+name+"=([^&#]*)").exec(window.location.search);
	if(param == null)
	{
		return "";
	}else{
		return decodeURIComponent(param[1].replace(/\+/g, " "));
	}
}

window.onpopstate = function()
{
	var page = getParam("page");
	loadPage(page ? page : "news");
}

$(document).ready(function()
{
	var page = getParam("page");
	loadPage(page ? page : "news");

	$(".sidebar-nav a[href^='#']").click(function()
	{
		loadPage(href.substring(1));
		return false;
	})
});
//<![CDATA[
/**
 * Copyright (c) 2022-present, Potential IT,  All rights reserved.
*/
/*! Lazy Loading jQuery Plugin - Lazy Scroll 
* https://github.com/pikitemplates/scripts
*
* Copyright (c) 2018-2021 Piki Templates
* https://pikitemplates.com
*/
$(function(n){n.fn.lazyimg=function(){return this.each(function(){function o(){var o=n(window).height();if(n(window).scrollTop()+o>t.offset().top){var a=new Image;a.onload=function(){t.addClass("lazy-img")},a.src=c}}var t=n(this),a=t.attr("src"),i=Math.round(t.height()),c="";c=a.match("s72-c")?a.replace("/s72-c",i):a,n(window).on("load scroll",o),o()})}});
/*! On Scroll Plugin Slider Effect
*
* Copyright (c) 2018-2021 Piki Templates
* https://pikitemplates.com
*/
jQuery(function(o){var n=function(){var a=o(window).scrollTop()+o(window).height(),i=o(".animatable");0==i.length&&o(window).off("scroll",n),i.each(function(n){var i=o(this);i.offset().top+i.height()-200<a&&i.removeClass("animatable").addClass("animated")})};o(window).on("scroll",n),o(window).trigger("scroll")});

/*! Get Button */
(function () {
        var options = {
            facebook: "109672584880905", // Facebook page ID
            whatsapp: "+8801313599091", // WhatsApp number
            call_to_action: "", // Call to action
            button_color:"#d12053", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "whatsapp,facebook", // Order of buttons
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
/*! Main Js */
$(function () {
   function msgError() {
     return '<span class="error-status"><b>Error 404:</b> Results Not Found Use Correct <b>/Label</b> or <b>/recent</b> or <b>/random</b> code to Show Posts</span>'
   }

   function netError() {
     return '<span class="error-status"><b>Error 505:</b> The Server is unavailable to connect ! {Refresh Try Again}</span>'
   }

   function orderError() {
     return '<span class="error-status"><b>Error 400:</b> Wrong Shortcut code Please Use Correct Format like <b>6/featured/label</b>  to Show Posts ASAP !</span>'
   }

   function beforeLoader() {
     return '<div class="loading-icon"/>'
   }

   function optimizeImageiki(content, $src) {
     $content = $('<div>').html(content),
       $t = $content.find('img:first').attr('src'),
       join = $t.lastIndexOf('/') || 0,
       turn = $t.lastIndexOf('/', join - 1) || 0,
       rotate = $t.substring(0, turn),
       enter = $t.substring(turn, join),
       out = $t.substring(join);
     if (enter.match(/\/s[0-9]+/g) || enter.match(/\/w[0-9]+/g) || enter == '/d') {
       enter = '/w680'
     }
     $src = rotate + enter + out;
     return $src
   }

   function getImageiki(parent, src) {
  return parent.match("i.ytimg.com") ? "video-nos" : "image-nos";
}
  function defaultCodeiki(parent, count, label, order) {
    var furl = "",
       startIndex = Math.floor((Math.random() * count) + 1);
     if (label !== undefined) {
       if (label.match('recent')) {
         furl = '/feeds/posts/default?alt=json-in-script&max-results=' + count;
       } else if (label.match("random")) {
         furl = '/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=' + startIndex + '&max-results=' + count;
       } else if (!(label.match('random')) || !(label.match('recent'))) {
         furl = '/feeds/posts/default/-/' + label + '?alt=json-in-script&max-results=' + count;
       }
     }
     if (furl.length > 0) {
       $.ajax({
         type: 'GET',
         url: furl,
         cache: false,
         dataType: 'jsonp',
         beforeSend: function (data) {
           switch (order) {
                         case 'megamenu':
              parent.addClass("sub-tab mega-menu");
              parent.find('a:first').attr('href', function (parent, href) {
                switch (label) {
                  case 'recent':
                    href = href.replace(href, '/search');
                    break;
                  default:
                    href = href.replace(href, '/search/label/' + label);
                    break
                }
                return href
              });
               break;
              case 'trending':
              parent.html(beforeLoader()).parent().find('.widget-content').addClass('open-iki');
              break;
             case 'col-left':
             case 'col-right':
             case 'box-color':
             case 'footer':
             case 'related':
               parent.html(beforeLoader()).parent().addClass('type-' + order + ' open-iki');
               break;
           }
         },
         complete: function (data) {
           if (order == 'col-left' || order == 'col-right') {
             if (label.match('recent', 'random')) {
             e = showMoreText, e = "" != e ? e : pikiMessages.showMore, parent.closest(".HTML").find('.widget-title').append('<a class="simple-viewmore" href="/search">' + e + '</a>');
             } else {
              e = showMoreText, e = "" != e ? e : pikiMessages.showMore, parent.closest(".HTML").find('.widget-title').append('<a class="simple-viewmore" href="/search/label/' + label + '">' + e + '</a>');
              }
           }
         },
         success: function (data) {
           var htmltype = '';
           switch (order) {      
             case 'megamenu':
               htmltype += '<div class="job-zad"><div class="job-zajs">';
               break;
             case 'col-left':
             case 'col-right':
               htmltype += '<div class="jobiki-main-wrapper">';
               break;
             case 'related':
               htmltype += '<div class="job-wmr-creative">';
               break;
             case 'footer':
               htmltype += '<div class="footer-hero">';
               break;
             default:
               htmltype += '<ul>';
               break;
           }
           var json = data.feed.entry;
           if (json != undefined) {
             for (var i = 0, feed = json; i < json.length; i++) {
               for (var j = 0; j < json[i].link.length; j++) {
                 if (json[i].link[j].rel == "alternate") {
                   link = json[i].link[j].href;
                   break;
                 }
               }
              var title = json[i].title.$t ? json[i].title.$t : pikiMessages.noTitle,
                 author = json[i].author[0].name.$t,
                 content = json[i].content.$t,
                 $content = $('<div>').html(content),
                 shortSummary = $content.text().substr(0, 110) + '...',
                 longSummary = $content.text().substr(0, 210) + '...';
               if ('category' in json[i]) {
                 if (json[i].category[0].term !== undefined) {
                   var tag = json[i].category[0].term;
                 }
               } else {
                 var tag = 'Uncategorized';
               }
               var getDate = json[i].published.$t,
                 y = getDate.substring(0, 4),
                 m = getDate.substring(5, 7),
                 d = getDate.substring(8, 10),
                 date = monthsName[parseInt(m, 10) - 1] + ' ' + d + ', ' + y;
               var sort = '';
               if (json[i].media$thumbnail) {
                 var src = json[i].media$thumbnail.url
               } else {
                 src = noThumb;
               }
               if (content.indexOf(content.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1) {
                 if (content.indexOf('<img') > -1) {
                   if (content.indexOf(content.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < content.indexOf('<img')) {
                     $src = src.replace("img.youtube.com", "i.ytimg.com").replace('/default.', '/maxresdefault.')
                   } else {
                     $src = optimizeImageiki(content)
                   }
                 } else {
                   $src = src.replace("img.youtube.com", "i.ytimg.com").replace('/default.', '/maxresdefault.')
                 }
               } else if (content.indexOf('<img') > -1) {
                 $src = optimizeImageiki(content)
               } else {
                 $src = noThumb;
               }
                var yt = getImageiki($src);
               switch (order) {                 
                 case 'megamenu':
                   htmltype += '<div class="job-zaj"><div class="job-mposts-mthumb"><div class="post-filter-link ' + yt + '"><a class="snip-thumbnail lazy-img background-layer" href="' + link + '"><img class="snip-thumbnail lazy-img" alt="' + title + '" src="' + $src + '"/></a></div></div><span class="post-tag">' + tag + '</span><div class="featured-meta"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></div>';
                   break;
                 case 'col-left':
                     htmltype += '<div class="job-zaf item' + i + '"><div class="job-zah"><a class="post-filter-link ' + yt + '" href="' + link + '"><img class="snip-thumbnail" alt="' + title + '" src="' + $src + '"/></a></div><div class="piki-hero-box"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="post-snip"><span class="post-date">' + date + '</span></div></div></div>';
                   break;
                 case 'col-right':
                     htmltype += '<div class="job-zaf item' + i + '"><div class="job-zah"><a class="post-filter-link ' + yt + '" href="' + link + '"><img class="snip-thumbnail" alt="' + title + '" src="' + $src + '"/></a></div><div class="piki-hero-box"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="post-snip"><span class="post-date">' + date + '</span></div></div></div>';
                   break;                
                 case 'related':
                     htmltype += '<div class="job-zaf item' + i + '"><div class="job-zah"><a class="post-filter-link ' + yt + '" href="' + link + '"><img class="snip-thumbnail" alt="' + title + '" src="' + $src + '"/></a></div><div class="piki-hero-box"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="post-snip"><span class="post-date">' + date + '</span></div></div></div>';
                   break;
                 default:
                   parent.html(beforeLoader()).parent().addClass('open-iki');
                   htmltype += orderError();
                   parent.parent().html(htmltype);
                   break;
               }
             }
             sort += '</ul>';
             htmltype += sort;
           } else {
             switch (order) {
               case 'megamenu':
                 htmltype = '<div class="job-zad">' + msgError() + '</div>';
                 break;
               default:
                 htmltype = msgError();
                 break
             }
           }
           switch (order) {
             case 'megamenu':
               htmltype += '</div></div>';
              parent.append(htmltype);
               break;
             case 'trending || col-left || col-right || footer || related':
               parent.html(htmltype);
               htmltype += '</div></div>';
               break;
             default:
               htmltype += '</div>';
               parent.html(htmltype);
               break;
           }
           parent.find('img.snip-thumbnail').lazyimg();
            $(".job-zas").lazyticker();
         },
         error: function () {
           switch (order) {
             case 'megamenu':
               parent.append('<div class="job-zad">' + netError() + '</div>');
               break;
             default:
               parent.html(netError());
               break
           }
         }
       });
     }
     $("#job-zaq li a").each(function () {
       var $this = $(this),
         sp = $this.attr("href").trim();
       if (sp.match("megamenu")) {
         if (label.match('recent', 'random')) {
           pt = '/search';
         } else {
           pt = '/search/label/' + label;
         }
         $this.attr('href', pt)
       }
     });
   };
   $(".widget-content,.job-zaa .HTML .widget-content,.sidebar .HTML .widget-content,.footer-post .HTML .widget-content").each(function () {
     var $this = $(this),
       sp = $this.text().split("/");
     if (!isNaN(sp[0])) {
       var count = sp[0],
         order = sp[1],
         label = sp[2];
       defaultCodeiki($this, count, label, order);
     }
   });
   $('.job-zao').each(function (count, label, order) {
     var $this = $(this),
       label = $this.find('.related-tag').attr('label'),
       count = relatedPostsNum;
     order = 'related';
     defaultCodeiki($this, count, label, order);
   });
   $(".job-zau li").each(function (label, order) {
     var $this = $(this),
       sp = $this.find("a").attr("href");
     if (sp.match("megamenu")) {
       var sp = sp.split("/");
       if (2 === sp.length) {
         var order = sp[0],
           label = sp[1];
       }
       defaultCodeiki($this, 4, label, order);
     }
   });
 });
$(function() {
  $(".job-zai").click(function() {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode");
    if ("darkmode" === localStorage.getItem("mode")) {
      document.querySelector("#mainContent").classList.add("dark");
    } else {
      document.querySelector("#mainContent").classList.remove("dark");
    }
  });
$(".PopularPosts .post-filter-link .snip-thumbnail,.FeaturedPost  .post-filter-link .snip-thumbnail,.post-filter .post-filter-link .snip-thumbnail,.avatar-container .snip-thumbnail, .author-image .snip-thumbnail").lazyimg();
$("#job-zau .widget").addClass("show-menu");
$("#job-zau").each(function() {
       a = $(this),
       d = a.find(".LinkList ul > li").children("a"),
       g = d.length,
         n = 0;
      for (; n < g; n++) {
        var b = d.eq(n);
        var c = b.text();
        if ("_" !== c.charAt(0) && "_" === d.eq(n + 1).text().charAt(0)) {
          var children = b.parent();
          children.append('<ul class="sub-menu m-sub"/>');
        }
        if ("_" === c.charAt(0)) {
          b.text(c.replace("_", ""));
          b.parent().appendTo(children.children(".sub-menu"));
        }
      }
      n = 0;
      for (; n < g; n++) {
        b = d.eq(n);
        c = b.text();
        if ("_" !== c.charAt(0) && "_" === d.eq(n + 1).text().charAt(0)) {
          var pro = b.parent();
          pro.append('<ul class="sub-menu2 m-sub"/>');
        }
        if ("_" === c.charAt(0)) {
          b.text(c.replace("_", ""));
          b.parent().appendTo(pro.children(".sub-menu2"));
        }
      }
      $("#job-zau").find(".LinkList ul li ul").parent("li").addClass("sub-tab");
    });
       $(".job-zau li").each(function () {
     0 < $(this).find("ul").length && $(this).addClass("drop-down");
   });
  $("#job-zaq").each(function() {
    var a = $(this);
    $("#jobikis-list").clone().appendTo(a);
    $(".show-job-zaq-p, .hide-job-zaq, .overlay").on("click", function() {
      $("body").toggleClass("jobikis-open");
    });
  });
   $(".job-zaq ul .mega-menu").removeClass("sub-tab");
  $(".job-zaq ul li a").on("click", function() {
    $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170);
  });
    $(".job-zaw").each(function() {
    var a = $(this), w = $("#social-sec ul.social").clone();
    w.appendTo(a);
  }); 
    $(".job-zzu").each(function() {
    var a = $(this), w = $("#menu-top ul.nav1").clone();
    w.appendTo(a);
  });
  $(".job-zay, .job-zay-closer").on("click", function() {
    $(".job-zay-shadow").toggleClass("job-zay-shadow-show");
    $("body").toggleClass("active-search");
  });
  $("#job-zat .job-hero").each(function() {
    var a = $(this);
    if (1 == fixedMenu && 0 < a.length) {
      var w = $(document).scrollTop(), l = a.offset().top, n = a.height(), r = l + n;
      $(window).scroll(function() {
        var e = $(document).scrollTop(), b = $("#footer-wrapper").offset().top - n;
        e < b && (e > r ? a.addClass("fixed-nos") : 0 >= e && a.removeClass("fixed-nos"), e > w ? a.removeClass("show") : a.addClass("show"), w = $(document).scrollTop());
      });
    }
  });
  $("#load-more-link").each(function () {
    var a = $(this).data("load");
    a && $("#load-more-link").show();
    $("#load-more-link").on("click", function (w) {
      $("#load-more-link").hide();
      $.ajax({
        url: a,
        success: function (l) {
          var n = $(l).find(".grid-posts");
          n.find(".post-filter").addClass("loading-frame load-time");
          $(".grid-posts").append(n.html());
          (a = $(l).find("#load-more-link").data("load")) ? $("#load-more-link").show(): ($("#load-more-link").hide(), $("#blog-pager .no-more").addClass("show"));
          $("img.snip-thumbnail").addClass("lazy-img");
        },
        beforeSend: function () {
          $("#blog-pager .loading").show();
        },
        complete: function () {
          $("#blog-pager .loading").hide();
        }
      });
      w.preventDefault();
    });
  });
  $(".post-body iframe").each(function() {
    var a = $(this);
    a.attr("src").match("www.youtube.com") && a.wrap('<div class="video-frame"/>');
  });
  $(".post-body strike").each(function() {
    var a = $(this), w = a.text().trim();
    "(ads1)" == w && a.replaceWith('<div id="new-bottom-ad-placeholder"/>');
    "(ads2)" == w && a.replaceWith('<div id="new-top-ad-placeholder"/>');
  });
 $('.post-body blockquote').each(function() {
    var $this = $(this),
        type = $this.text().toLowerCase().trim(),
        htmlorder = $this.html();
  if (type.match('(code-box)')) {
  const content = htmlorder.replace('(code-box)', '');
    $this.replaceWith('<pre class="code-box">' + content + '</pre>');
  }
});
  $('.post-body strike').each(function() {
    var $this = $(this),
   type = $this.text().toLowerCase().trim(),
  htmlorder = $this.html();
  if (type.match('(contact-form)')) {
    $this.replaceWith('<div class="contact-form"/>');
    $('.contact-form').append($('#ContactForm1'))
  }
  if (type.match('(toc)')) {
  const content = htmlorder.replace('(toc)', '');
    $this.replaceWith('<div class="tociki-pro"><div class="tociki-inner"><a href="javascript:;" class="tociki-title" role="button" title="Table of Contents"><span class="tociki-title-text">' + content + '</span></a><ol id="tociki"></ol></div></div>');
        }
  if (type.match('(caps)')) {
  const content = htmlorder.replace('(caps)', '');
    $this.replaceWith('<span class="firstword">' + content + '</span>');
  }
  if (type.match('(left-sidebar)')) {
  const content = htmlorder.replace('(left-sidebar)', '');
    $this.replaceWith('<style>.item-view #feed-view{float:right}.item-view #sidebar-container{float:left}</style>');
  }
  if (type.match('(right-sidebar)')) {
  const content = htmlorder.replace('(right-sidebar)', '');
    $this.replaceWith('<style>.item-view #feed-view{float:left}.item-view #sidebar-container{float:right}</style>');
  }
  if (type.match('(full-width)')) {
  const content = htmlorder.replace('(full-width)', '');
    $this.replaceWith('<style>.item-view #feed-view{width:100%}.item-view #sidebar-container{display:none}</style>');
  }
});
$(".job-zar .window-piki").on("click", function() {
  var a = $(this), w = a.data("url"), l = a.data("width");
  a = a.data("height");
  window.open(w, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + l + ",height=" + a + ",left=" + Math.round(window.screen.width / 2 - l / 2) + ",top=" + Math.round(window.screen.height / 2 - a / 2)).focus();
});
$(".job-zar").each(function() {
  var a = $(this);
  a.find(".show-hid a").on("click", function() {
    a.toggleClass("show-hidden");
  });
});
  $("#new-bottom-ad-placeholder").each(function() {
    var a = $(this);
    a.length && $("#bottom-ad-placeholder").appendTo(a);
  });
  $("#new-top-ad-placeholder").each(function() {
    var a = $(this);
    a.length && $("#top-ad-placeholder").appendTo(a);
  });
  $("#upper-ad .widget").each(function() {
    var a = $(this);
    a.length && a.appendTo($("#bottom-ad-placeholder"));
  });
  $("#lower-ad .widget").each(function() {
    var a = $(this);
    a.length && a.appendTo($("#top-ad-placeholder"));
  });
    $("#main-ads-post .widget").each(function () {
    var a = $(this);
    a.length && a.appendTo($("#post-placeholder"));
  });
  $(".author-description a").each(function() {
    $(this).attr("target", "_blank");
  });
  $(".about-author .author-description span a").each(function() {
    var a = $(this), w = a.text().trim(), l = a.attr("href");
    a.replaceWith('<li class="' + w + '"><a href="' + l + '" title="' + w + '" target="_blank"/></li>');
    $(".description-links").append($(".author-description span li"));
    $(".description-links").addClass("show");
  });
  $(".block-inner").each(function() {
    var a = $("a.prev-post-link").attr("href"), w = $("a.next-post-link").attr("href");
    $.ajax({url:a, type:"get", success:function(l) {
      l = $(l).find(".blog-post h1.entry-title").text();
      $(".post-prev a .block-inner-inner p").text(l);
    }});
    $.ajax({url:w, type:"get", success:function(l) {
      l = $(l).find(".blog-post h1.entry-title").text();
      $(".post-next a .block-inner-inner p").text(l);
    }});
  });
  $(".before-text").each(function() {
  var a = $(this), b = followByEmailText;
  "" != b && a.text(b);
});
  $(".job-zao-title .widget-title h3").each(function() {
  var a = $(this), b = relatedPostsText;
  "" != b && a.text(b);
});
  $("#feed-view, #sidebar-container").each(function() {
    1 == fixedSidebar && $(this).theiaStickySidebar({additionalMarginTop:30, additionalMarginBottom:30});
  });
  $(".backTop").each(function() {
    var a = $(this);
    $(window).on("scroll", function() {
      100 <= $(this).scrollTop() ? a.fadeIn(250) : a.fadeOut(250);
    });
    a.click(function() {
      $("html, body").animate({scrollTop:0}, 500);
    });
  });
}); 
//]]>
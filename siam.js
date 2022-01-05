/*
 * jQuery replaceText
 * http://benalman.com/projects/jquery-replacetext-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

/*! Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

/*! Table of Contents jQuery Plugin - jquery.toc 
* http://www.apache.org/licenses/LICENSE-2.0 
*
* Copyright (c) 2013-2016 Nikhil Dabas 
* https://github.com/ndabas/toc
*/
!function(a){"use strict";var b=function(b){return this.each(function(){var c,d,e=a(this),f=e.data(),g=[e],h=this.tagName,i=0;c=a.extend({content:"body",headings:"h1,h2,h3"},{content:f.toc||void 0,headings:f.tocHeadings||void 0},b),d=c.headings.split(","),a(c.content).find(c.headings).attr("id",function(b,c){var d=function(a){0===a.length&&(a="?");for(var b=a.replace(/\s+/g,"_"),c="",d=1;null!==document.getElementById(b+c);)c="_"+d++;return b+c};return c||d(a(this).text())}).each(function(){var b=a(this),c=a.map(d,function(a,c){return b.is(a)?c:void 0})[0];if(c>i){var e=g[0].children("li:last")[0];e&&g.unshift(a("<"+h+"/>").appendTo(e))}else g.splice(0,Math.min(i-c,Math.max(g.length-1,0)));a("<li/>").appendTo(g[0]).append(a("<a/>").text(b.text()).attr("href","#"+b.attr("id"))),i=c})})},c=a.fn.toc;a.fn.toc=b,a.fn.toc.noConflict=function(){return a.fn.toc=c,this},a(function(){b.call(a("[data-toc]"))})}(window.jQuery);

$(".tociki-title").each(function(t){(t=$(this)).on("click",function(){t.toggleClass("opened"),$("#tociki").slideToggle(180)})}),$("#tociki").toc({content:".post-body",headings:"h2,h3,h4"}),$("#tociki li a").each(function(t){(t=$(this)).click(function(){return $("html,body").animate({scrollTop:$(t.attr("href")).offset().top},500),!1})});

 /*! ETC */

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
                                              
/*!Comment System*/
var jsCommentPages=function(){var t,a,e=function(){$(".js-page-tweet-count").each(function(){var t=$(this);$.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?",{url:t.attr("href")},function(a){t.text(a.count),t=null})})},n=function(){a.addClass("js-inactive-tab"),(a=$(this)).removeClass("js-inactive-tab"),t.hide(),(t=$("#"+a.attr("id")+"-page")).show()};$("document").ready(function(){$(".comments-tab").each(function(){var t=$(this);t.click(n).addClass("js-inactive-tab"),t.attr("id"),t=null}),e();var s=$(".js-default-tab:first"),i="#blogger-comments";s.length>0&&(i="#"+s.attr("id")),(a=$(i)).removeClass("js-inactive-tab"),(t=$(i+"-page")).show()})}();

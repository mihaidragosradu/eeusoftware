

/* ************** JS FORM VALIDATION ************** */
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
/* ************ END JS FORM VALIDATION ************ */


/* ***************** jQuery ***************** */
$(document).ready(function() {

  //GDPR Consent 
  window.onload = function() {
    setTimeout(function () {
      $("#cookieConsent").one().fadeIn(200);
   }, 1000);
  $("#closeCookieConsent, .cookieConsentOK").one('click',function(){
    $("#cookieConsent").fadeOut(200);
  }
  );
}
//END GDPR Consent

/* ********* 2ND MENU Scroll offset from top of the screen ***************** */
//   var offset = 73;
// $(".menuEEU div a, #menuEEU li a").click(function(event) {
//   event.preventDefault();
//   var elem = $($(this), $(this).attr("src"));
//   console.log(elem[0]);
//   elem[0].scrollTop();
//   // $(elem)[0].scrollIntoView();
//   // scrollBy(0,-offset);
// });

$('.menuEEU div a, #menuEEU li a, #menuEEUfixed li a').bind('click', function(e) {
  e.preventDefault();
  // console.log($(this.hash));
  $('html, body').stop().animate({
      scrollTop: $(this.hash).offset().top -68
  }, 500,'linear');
  // edit: Opera requires the "html" elm. animated
});

// $('body').scrollspy({target: ".navbar", offset: 73}); 

/* *********** END 2ND MENU Scroll offset from top of the screen *********** */

  /* *********** Change bg color to the MENU TAB on scrolling ************ */
  function onScroll(event){
    event.preventDefault();
    var scrollPos = $(document).scrollTop();
    $(".menuEEU div a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $(".menuEEU div a").removeClass("menuEEUactive");
            currLink.addClass("menuEEUactive");
        }
        else{
            currLink.removeClass("menuEEUactive");
        }
    });
}
  $(document).on("scroll", onScroll);
/* ************** END Change bg color to the MENU TAB on scrolling ************** */


  $("#first").removeClass("active");
 
   
/* ************** STOP CAROUSEL ************* */
  $(".carousel").carousel({
    interval: false
  });
/* *********** END STOP CAROUSEL ************ */

/* *************** CAROUSEL ARROW *********** */
  $("#EEUcontrolprev").on("click", function(e) {
    e.preventDefault();
    $(".carousel").carousel("prev");
  });
  $("#EEUcontrolnext").on("click", function(e) {
    e.preventDefault();
    $(".carousel").carousel("next");
  });
/* ************** END CAROUSEL ARROW ************ */

  /* ********* 2nd MENU  appereance ************ */
$(window).scroll(function() {
  $("#headerLogoEEUwhite").toggleClass(
    "headerLogoEEUwhitescrolled",
    $(this).scrollTop() > 150
  );
}); 
/* ************ END 2nd MENU  appereance ********** */

  /************ Rotate arrow on Sections *********** */
  $("#accordionProjects a")
    .on("click", function(e) {
      $(this)
        .find('[class*="angle"]')
        .toggleClass("fa-angle-up");
    })
    .focusout(function(e) {
      $(this)
        .find('[class*="angle"]')
        .toggleClass("fa-angle-up");
    });

  $("#accordionExpertise a")
    .on("click", function(e) {
      $(this)
        .find('[class*="angle"]')
        .toggleClass("fa-angle-up");
    })
    .focusout(function(e) {
      $(this)
        .find('[class*="angle"]')
        .toggleClass("fa-angle-up");
    });

/*************** END Rotate arrow on Sections ************* */

/* ************** Show/HIde More and Less ************ */

  $("#moreProjects").on("click", function(e) {
    $("#accordionProjects div.eeu-none").toggleClass("eeu-show ");
    $("#moreProjects a")
      .find('[class*="angle"]')
      .toggleClass("fa-angle-up");
    $("#moreProjectsBtn").toggleClass("eeu-none");
    $("#moreProjectsBtn2").toggleClass("eeu-show");
  });

  $("#moreExpertise").on("click", function(e) {
    $("#accordionExpertise div.eeu-none").toggleClass("eeu-show ");
    $("#moreExpertise a")
      .find('[class*="angle"]')
      .toggleClass("fa-angle-up");
    $("#moreExpertiseBtn").toggleClass("eeu-none");
    $("#moreExpertiseBtn2").toggleClass("eeu-show");
  });

  $("#moreArticles").on("click", function(e) {
    $("#articlesContainer div.eeu-none").toggleClass("eeu-show ");
    $("#moreArticles a")
      .find('[class*="angle"]')
      .toggleClass("fa-angle-up");
    $("#moreArticlesBtn").toggleClass("eeu-none");
    $("#moreArticlesBtn2").toggleClass("eeu-show");
  });

  /* *************** Show/HIde More and Less ************ */

  /* ****************** TOOLTIP ******************* */
  $(function() {
    var targets = $("[rel~=tooltip]"),
      target = false,
      tooltip = false,
      title = false;

    targets.bind("mouseenter", function() {
      target = $(this);
      tip = target.attr("title");
      tooltip = $('<div id="tooltip"></div>');

      if (!tip || tip == "") return false;

      target.removeAttr("title");
      tooltip
        .css("opacity", 0)
        .html(tip)
        .appendTo("body");

      var init_tooltip = function() {
        if ($(window).width() < tooltip.outerWidth() * 1.5)
          tooltip.css("max-width", $(window).width() / 2);
        else tooltip.css("max-width", 340);

        var pos_left =
            target.offset().left +
            target.outerWidth() / 2 -
            tooltip.outerWidth() / 2,
          pos_top = target.offset().top - tooltip.outerHeight() - 20;

        if (pos_left < 0) {
          pos_left = target.offset().left + target.outerWidth() / 2 - 20;
          tooltip.addClass("left");
        } else tooltip.removeClass("left");

        if (pos_left + tooltip.outerWidth() > $(window).width()) {
          pos_left =
            target.offset().left -
            tooltip.outerWidth() +
            target.outerWidth() / 2 +
            20;
          tooltip.addClass("right");
        } else tooltip.removeClass("right");

        if (pos_top < 0) {
          var pos_top = target.offset().top + target.outerHeight();
          tooltip.addClass("top");
        } else tooltip.removeClass("top");

        tooltip
          .css({ left: pos_left, top: pos_top })
          .animate({ top: "+=10", opacity: 1 }, 50);
      };

      init_tooltip();
      $(window).resize(init_tooltip);

      var remove_tooltip = function() {
        tooltip.animate({ top: "-=10", opacity: 0 }, 50, function() {
          $(this).remove();
        });

        target.attr("title", tip);
      };

      target.bind("mouseleave", remove_tooltip);
      tooltip.bind("click", remove_tooltip);
    });
  });
 /* **************** END TOOLTIP ******************** */

  // $("body").each(function() {
  //   $(this).scrollspy("refresh");
  // });


  /* ============ Share articles on social media ===============  */
setShareLinks();
function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
  // Setting 'params' to an empty string will launch
  // content in a new tab or window rather than a pop-up.
  // params = "";
  window.open(url,"NewWindow",params);
}


function setShareLinks() {
  var pageUrl = encodeURIComponent(document.URL);
  var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

  $(".social-share.facebook").on("click", function() {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });

  $(".social-share.twitter").on("click", function() {
    url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(url);
  });

  $(".social-share.linkedin").on("click", function() {
    url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
    socialWindow(url);
  })
}
/* ============ Share articles on social media ===============  */

/* ****  Insert time in article ***** */
Date.prototype.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep","Oct", "Nov", "Dec"];
Date.prototype.getMonthName = function() {
  return this.monthNames[this.getMonth()];
};
var dt = new Date();
var day=dt.getDate();
var month=dt.getMonthName();
var year=dt.getFullYear();
$('#datetime').append('<span>'+day+' '+ month + ' '+year+'</span>');


$(".custom-file-input").on("change", function() {
var fileName = $(this).val().split("\\").pop();
$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

/* ****  End Insert time in article ***** */



  // $('#footer li.list-group-item, #footer li.list-group-item a:hover').css({'background-color':'transparent','border':'0'});

  // $('#accordionProjects a').focusOut(function(){
  //   $(this).removeClass('fa-angle-up');
  // });

  // $('#accordionProjects div.card-header').hover(
  //   function(){$(this).addClass('mdesignbox1')},
  //   function(){$(this).removeClass('mdesignbox1')}
  // )

  
  /* Animatia de scroll*/

  //   $('body').scrollspy({target: ".navbar", offset: 73});
  //   $(".menuEEU a, #menuEEU a").on('click', function(event) {
  //   if (this.hash !== "") {
  //     event.preventDefault();
  //     var hash = this.hash;
  //     $('html, body').animate({scrollTop: $(hash).offset().top}, 1500, 'swing', function(){
  //           window.location.hash = hash;
  //       });
  //       }
  // });
  /* End scroll animation*/

  /* **** Hide text "since200" when vw is smaller then 480px ******** */

// $(window).resize(function() {
//   if ($("#headerLogoEEUwhite").width() <= 480) {
//     $("#logotypeMenu2").addClass("eeu-none");
//   } else {
//     $("#logotypeMenu2").removeClass("eeu-none");
//   }
// });
/* **** End Hide text "since200" when vw is smaller then 480px ******** */




});

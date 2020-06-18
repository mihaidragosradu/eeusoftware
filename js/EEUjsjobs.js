/* ********************************************** JS FORM VALIDATION ******************************* */

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
/* ******************************************* END JS FORM VALIDATION ******************************* */



/*jQuery */
$(document).ready(function() {

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

/* ********* 2nd MENU  appereance ************ */
$(window).scroll(function() {
  $("#headerLogoEEUwhite").toggleClass(
    "headerLogoEEUwhitescrolled",
    $(this).scrollTop() > 200
  );
}); 
/* ************ END 2nd MENU  appereance ********** */
 
  /* **************************** TOOLTIP *********************************** */
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
 /* **************************** END TOOLTIP *********************************** */

});

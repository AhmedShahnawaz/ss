// start procedure area ####################################

$("#infographic article").click(function () {
    $(this).toggleClass("active");
  });
  $("#infographic article .controls .btn").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var currentEl = $(this).closest("article");
    var currentI = currentEl.data("step");
    currentEl.removeClass("active");
    var nextI = $(this).is(":first-child") ? currentI - 1 : currentI + 1;
    var nextEl = $("article[data-step='" + nextI + "']");
    nextEl.click();
    var y = document
      .querySelector("article[data-step='" + nextI + "'")
      .getBoundingClientRect().top;
    var supportsNativeSmoothScroll =
      "scrollBehavior" in document.documentElement.style;

    if (supportsNativeSmoothScroll) {
      window.scrollTo({
        top: y + window.pageYOffset - 300,
        behavior: "smooth"
      });
    } else {
      window.scrollTo(0, y + window.pageYOffset - 300);
    }
  });
  $(document).mouseup(function (e) {
    var tgt = $("#infographic article.active");
    if (!tgt.is(e.target) && tgt.has(e.target).length === 0)
      tgt.removeClass("active");
  });
 
// end procedure area ####################################


// start portfolio area  ##########################################

//  isotrop button click changed area 
  $(document).ready(function () {
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {
      $('.project-area .button-group button').removeClass('active');
      e.target.classList.add('active');
      let selector = $(e.target).attr('data-filter');
      $('.project-area .grid').isotope({
        filter: selector
      });
      return false;
    })
    $('.project-area .button-group #btn1').trigger('click');
    $('.project-area .grid .test-popup-link').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });
  
  });

  //portfolio image on hover area  
  $(document).ready(function () {
    $(".img").hover(function () {
      $(this).css("opacity", "0.7");
    }, function () {
      $(this).css("opacity", "1");
    });
  });

    // Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn01");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active01");
  current[0].className = current[0].className.replace(" active01", "");
  this.className += " active01";
  });
}

// end portfolio area ####################################




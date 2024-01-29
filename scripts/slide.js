document.addEventListener('DOMContentLoaded', function () {
  var preSlidesL = document.querySelectorAll('.pre-slide-left');

  preSlidesL.forEach(function (preSlideL) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preSlideL.classList.remove('pre-slide-left');
          preSlideL.classList.add('post-slide');
          observer.unobserve(preSlideL);
        }
      });
    }, { threshold: 0.1 }); 

    observer.observe(preSlideL);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var preSlidesR = document.querySelectorAll('.pre-slide-right');

  preSlidesR.forEach(function (preSlideR) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preSlideR.classList.remove('pre-slide-right');
          preSlideR.classList.add('post-slide');
          observer.unobserve(preSlideR);
        }
      });
    }, { threshold: 0.1 }); 

    observer.observe(preSlideR);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    var preSlidesUp = document.querySelectorAll('.pre-slide-up');

    preSlidesUp.forEach(function (preSlideUp) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            preSlideUp.classList.remove('pre-slide-up');
            preSlideUp.classList.add('post-slide');
            observer.unobserve(preSlide);
          }
        });
      }, { threshold: 0.1 }); 

      observer.observe(preSlideUp);
    });
  });





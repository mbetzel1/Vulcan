document.addEventListener('DOMContentLoaded', function () {
    var preSlides = document.querySelectorAll('.pre-slide-up');

    // Create an intersection observer for each pre-slide item
    preSlides.forEach(function (preSlide) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            preSlide.classList.remove('pre-slide-up');
            preSlide.classList.add('post-slide-up');
            observer.unobserve(preSlide);
          }
        });
      }, { threshold: 0.25 }); // Adjust the threshold as needed

      // Observe each pre-slide item
      observer.observe(preSlide);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var preSlides = document.querySelectorAll('.pre-slide-right');

    // Create an intersection observer for each pre-slide item
    preSlides.forEach(function (preSlide) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            preSlide.classList.remove('pre-slide-right');
            preSlide.classList.add('post-slide-right');
            observer.unobserve(preSlide);
          }
        });
      }, { threshold: 0.25 }); // Adjust the threshold as needed

      // Observe each pre-slide item
      observer.observe(preSlide);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var preSlides = document.querySelectorAll('.pre-slide-left');

    // Create an intersection observer for each pre-slide item
    preSlides.forEach(function (preSlide) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            preSlide.classList.remove('pre-slide-left');
            preSlide.classList.add('post-slide-left');
            observer.unobserve(preSlide);
          }
        });
      }, { threshold: 0.25 }); // Adjust the threshold as needed

      // Observe each pre-slide item
      observer.observe(preSlide);
    });
  });

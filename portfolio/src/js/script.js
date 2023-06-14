// 
document.addEventListener('DOMContentLoaded', function() {
    var linkElements = document.querySelectorAll('.navbar-nav .nav-link');
    for (var i = 0; i < linkElements.length; i++) {
        linkElements[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var startPosition = window.pageYOffset;
        var targetPosition = targetElement.offsetTop;
        var distance = targetPosition - startPosition;
        var duration = 800;
        var startTimestamp = null;
  
        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            var progress = timestamp - startTimestamp;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
  
        window.requestAnimationFrame(step);
    }
  
    // 
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});

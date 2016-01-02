// DISABLE PULL-TO-REFESH
// To use you need to have a hidden input field. copy this somewhere on the body of your html.
//
// <input id="preventPullToRefresh" type="hidden"></input>
//

window.addEventListener('load', function() {
  var preventPullToRefreshCheckbox = document.getElementById('preventPullToRefresh');
  var preventOverscrollGlowCheckbox = document.getElementById("preventOverscrollGlow");
  var preventScrollCheckbox = document.getElementById("preventScroll");

  var maybePreventPullToRefresh = true;
  var lastTouchY = 0;
  var touchstartHandler = function(e) {
    if (e.touches.length != 1) return;
    lastTouchY = e.touches[0].clientY;
    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.
    maybePreventPullToRefresh =
        preventPullToRefreshCheckbox.checked=true &&
        window.pageYOffset == 0;
  }

  var touchmoveHandler = function(e) {
    var touchY = e.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (maybePreventPullToRefresh) {
      // To suppress pull-to-refresh it is sufficient to preventDefault the
      // first overscrolling touchmove.
      maybePreventPullToRefresh = false;
      if (touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }
  }

  document.addEventListener('touchstart', touchstartHandler, false);
  document.addEventListener('touchmove', touchmoveHandler, false);
});
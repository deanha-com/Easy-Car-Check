/**
 * disable-pull-to-refresh.js v1.0.0
 * http://www.deanha.com
 *
 * Adapted from
 * http://www.deanha.com
 */
/******************************************************************************************************* 
 * ## Instructions
 *
 * link the mobile-pull-to-refresh.js sscript in your your html <head>
 * to use this script you need to copy and paste the hidden input field onto the body of your html file.
 * 
 * <input id="disable-pull-to-refresh" type="hidden"></input>
 */

window.addEventListener('load', function() {
  var preventPullToRefreshCheckbox = document.getElementById('disable-pull-to-refresh');

  var maybePreventPullToRefresh = true;
  var lastTouchY = 0;
  var touchstartHandler = function(e) {
    if (e.touches.length != 1) return;
    lastTouchY = e.touches[0].clientY;
    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.
    maybePreventPullToRefresh =
        preventPullToRefreshCheckbox.checked=true &&  // checked=true => disables pull-to-refresh
        window.pageYOffset == 0;                      // checked=false => enables pull-to-refresh
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

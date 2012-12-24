(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
function GScript(src) {document.write('<' + 'script src="' + src + '"' +' type="text/javascript"><' + '/script>');}function GBrowserIsCompatible() {return !!document.getElementById;}function GApiInit() {if (GApiInit.called) return;GApiInit.called = true;window.GAddMessages && GAddMessages({160: '\x3cH1\x3eServer Error\x3c/H1\x3eThe server encountered a temporary error and could not complete your request.\x3cp\x3ePlease try again in a minute or so.\x3c/p\x3e',1415: '.',1416: ',',1547: 'mi',1616: 'km',4100: 'm',4101: 'ft',10018: 'Loading...',10021: 'Zoom In',10022: 'Zoom Out',10024: 'Drag to zoom',10029: 'Return to the last result',10049: 'Map',10050: 'Satellite',10093: 'Terms of Use',10111: 'Map',10112: 'Sat',10116: 'Hybrid',10117: 'Hyb',10120: 'We are sorry, but we don\x27t have maps at this zoom level for this region.\x3cp\x3eTry zooming out for a broader look.\x3c/p\x3e',10121: 'We are sorry, but we don\x27t have imagery at this zoom level for this region.\x3cp\x3eTry zooming out for a broader look.\x3c/p\x3e',10507: 'Pan left',10508: 'Pan right',10509: 'Pan up',10510: 'Pan down',10511: 'Show street map',10512: 'Show satellite imagery',10513: 'Show imagery with street names',10806: 'Click to see this area on Google Maps',10807: 'Traffic',10808: 'Show Traffic',10809: 'Hide Traffic',12150: '%1$s on %2$s',12151: '%1$s on %2$s at %3$s',12152: '%1$s on %2$s between %3$s and %4$s',10985: 'Zoom in',10986: 'Zoom out',11047: 'Center map here',11089: '\x3ca href\x3d\x22javascript:void(0);\x22\x3eZoom In\x3c/a\x3e to see traffic for this region',11259: 'Full-screen',11751: 'Show street map with terrain',11752: 'Style:',11757: 'Change map style',11758: 'Terrain',11759: 'Ter',11794: 'Show labels',11303: 'Street View Help',11274: 'To use street view, you need Adobe Flash Player version %1$d or newer.',11382: 'Get the latest Flash Player.',11314: 'We\x27re sorry, street view is currently unavailable due to high demand.\x3cbr\x3ePlease try again later!',1559: 'N',1560: 'S',1561: 'W',1562: 'E',1608: 'NW',1591: 'NE',1605: 'SW',1606: 'SE',11907: 'This image is no longer available',10041: 'Help',12471: 'Current Location',12492: 'Earth',12823: 'Google has disabled usage of the Maps API for this application. See the Terms of Service for more information: %1$s.',12822: 'http://code.google.com/apis/maps/terms.html',12915: 'Improve the map',12916: 'Google, Europa Technologies',13171: 'Hybrid 3D',0: ''});}var GLoad;(function() {GLoad = function(apiCallback) {var callee = arguments.callee;GApiInit();var opts = {export_legacy_names:true,tile_override:[{maptype:0,min_zoom:"7",max_zoom:"7",rect:[{lo:{lat_e7:330000000,lng_e7:1246050000},hi:{lat_e7:386200000,lng_e7:1293600000}},{lo:{lat_e7:366500000,lng_e7:1297000000},hi:{lat_e7:386200000,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26"]},{maptype:0,min_zoom:"8",max_zoom:"8",rect:[{lo:{lat_e7:330000000,lng_e7:1246050000},hi:{lat_e7:386200000,lng_e7:1279600000}},{lo:{lat_e7:345000000,lng_e7:1279600000},hi:{lat_e7:386200000,lng_e7:1286700000}},{lo:{lat_e7:354690000,lng_e7:1286700000},hi:{lat_e7:386200000,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26"]},{maptype:0,min_zoom:"9",max_zoom:"9",rect:[{lo:{lat_e7:330000000,lng_e7:1246050000},hi:{lat_e7:386200000,lng_e7:1279600000}},{lo:{lat_e7:340000000,lng_e7:1279600000},hi:{lat_e7:386200000,lng_e7:1286700000}},{lo:{lat_e7:348900000,lng_e7:1286700000},hi:{lat_e7:386200000,lng_e7:1302000000}},{lo:{lat_e7:368300000,lng_e7:1302000000},hi:{lat_e7:386200000,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26"]},{maptype:0,min_zoom:"10",max_zoom:"19",rect:[{lo:{lat_e7:329890840,lng_e7:1246055600},hi:{lat_e7:386930130,lng_e7:1284960940}},{lo:{lat_e7:344646740,lng_e7:1284960940},hi:{lat_e7:386930130,lng_e7:1288476560}},{lo:{lat_e7:350277470,lng_e7:1288476560},hi:{lat_e7:386930130,lng_e7:1310531620}},{lo:{lat_e7:370277730,lng_e7:1310531620},hi:{lat_e7:386930130,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1.17\x26hl=en\x26src=api\x26"]},{maptype:3,min_zoom:"7",max_zoom:"7",rect:[{lo:{lat_e7:330000000,lng_e7:1246050000},hi:{lat_e7:386200000,lng_e7:1293600000}},{lo:{lat_e7:366500000,lng_e7:1297000000},hi:{lat_e7:386200000,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26"]},{maptype:3,min_zoom:"8",max_zoom:"8",rect:[{lo:{lat_e7:330000000,lng_e7:1246050000},hi:{lat_e7:386200000,lng_e7:1279600000}},{lo:{lat_e7:345000000,lng_e7:1279600000},hi:{lat_e7:386200000,lng_e7:1286700000}},{lo:{lat_e7:354690000,lng_e7:1286700000},hi:{lat_e7:386200000,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26"]},{maptype:3,min_zoom:"9",max_zoom:"9",rect:[{lo:{lat_e7:330000000,lng_e7:1246050000},hi:{lat_e7:386200000,lng_e7:1279600000}},{lo:{lat_e7:340000000,lng_e7:1279600000},hi:{lat_e7:386200000,lng_e7:1286700000}},{lo:{lat_e7:348900000,lng_e7:1286700000},hi:{lat_e7:386200000,lng_e7:1302000000}},{lo:{lat_e7:368300000,lng_e7:1302000000},hi:{lat_e7:386200000,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26"]},{maptype:3,min_zoom:"10",rect:[{lo:{lat_e7:329890840,lng_e7:1246055600},hi:{lat_e7:386930130,lng_e7:1284960940}},{lo:{lat_e7:344646740,lng_e7:1284960940},hi:{lat_e7:386930130,lng_e7:1288476560}},{lo:{lat_e7:350277470,lng_e7:1288476560},hi:{lat_e7:386930130,lng_e7:1310531620}},{lo:{lat_e7:370277730,lng_e7:1310531620},hi:{lat_e7:386930130,lng_e7:1314843700}}],uris:["http://mt0.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt1.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt2.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26","http://mt3.gmaptiles.co.kr/mt/v=kr1p.17\x26hl=en\x26src=api\x26"]}],jsmain:"http://maps.gstatic.com/intl/en_us/mapfiles/441c/maps2.api/main.js",obliques_urls:["http://khm0.googleapis.com/kh?v=68\x26src=app\x26","http://khm1.googleapis.com/kh?v=68\x26src=app\x26"],token:"1000518947",jsmodule_base_url:"http://maps.gstatic.com/intl/en_us/mapfiles/441c/maps2.api",generic_tile_urls:["http://mt0.googleapis.com/vt?hl=en\x26src=api\x26","http://mt1.googleapis.com/vt?hl=en\x26src=api\x26"],ignore_auth:false,apiary_key:"AIzaSyBHQ-XQTWBdiHzmGJMhdYdtZ9xeHwSo1dw",sv_host:"http://cbk0.google.com"};apiCallback(["http://mt0.googleapis.com/vt/lyrs\x3dm@203000000\x26hl\x3den\x26src\x3dapi\x26","http://mt1.googleapis.com/vt/lyrs\x3dm@203000000\x26hl\x3den\x26src\x3dapi\x26"], ["http://khm0.googleapis.com/kh/v\x3d123\x26src\x3dapp\x26","http://khm1.googleapis.com/kh/v\x3d123\x26src\x3dapp\x26"], ["http://mt0.googleapis.com/vt/lyrs\x3dh@203000000\x26hl\x3den\x26src\x3dapi\x26","http://mt1.googleapis.com/vt/lyrs\x3dh@203000000\x26hl\x3den\x26src\x3dapi\x26"],""  ,""  ,""  ,true,"google.maps.",opts,["http://mt0.googleapis.com/vt/lyrs\x3dt@130,r@203000000\x26hl\x3den\x26src\x3dapi\x26","http://mt1.googleapis.com/vt/lyrs\x3dt@130,r@203000000\x26hl\x3den\x26src\x3dapi\x26"]);if (!callee.called) {callee.called = true;}}})();function GUnload() {if (window.GUnloadApi) {GUnloadApi();}}var _mIsRtl = false;var _mHost = "http://maps.google.com";var _mUri = "/maps";var _mDomain = "google.com";var _mStaticPath = "http://maps.gstatic.com/intl/en_us/mapfiles/";var _mJavascriptVersion = G_API_VERSION = "441c";var _mTermsUrl = "http://www.google.com/intl/en_us/help/terms_maps.html";var _mLocalSearchUrl = "http://www.google.com/uds/solutions/localsearch/gmlocalsearch.js";var _mHL = "en";var _mGL = "us";var _mTrafficEnableApi = true;var _mTrafficTileServerUrls = ["http://mt0.google.com/mapstt","http://mt1.google.com/mapstt","http://mt2.google.com/mapstt","http://mt3.google.com/mapstt"];var _mCityblockLatestFlashUrl = "http://maps.google.com/local_url?dq=&amp;q=http://www.adobe.com/shockwave/download/download.cgi%3FP1_Prod_Version%3DShockwaveFlash&amp;s=ANYYN7manSNIV_th6k0SFvGB4jz36is1Gg";var _mCityblockFrogLogUsage = false;var _mCityblockInfowindowLogUsage = false;var _mCityblockUseSsl = false;var _mSatelliteToken = "fzwq1MWNuhPIf5qZ3ZfTrwlNxtcC7m4KytEHuA";var _mMapCopy = "Map data \x26#169;2012 ";var _mSatelliteCopy = "Imagery \x26#169;2012 ";var _mGoogleCopy = "\x26#169;2012 Google";var _mPreferMetric = false;var _mDirectionsEnableApi = true;var _mLayersTileBaseUrls = ['http://mt0.google.com/mapslt','http://mt1.google.com/mapslt','http://mt2.google.com/mapslt','http://mt3.google.com/mapslt'];var _mLayersFeaturesBaseUrl = "http://mt0.google.com/vt/ft";function GLoadMapsScript() {if (!GLoadMapsScript.called && GBrowserIsCompatible()) {GLoadMapsScript.called = true;GScript("http://maps.gstatic.com/intl/en_us/mapfiles/441c/maps2.api/main.js");}}(function() {if (!window.google) window.google = {};if (!window.google.maps) window.google.maps = {};var ns = window.google.maps;ns.BrowserIsCompatible = GBrowserIsCompatible;ns.Unload = GUnload;})();GLoadMapsScript();;
// GMap marker image data.
Drupal.gmap = Drupal.gmap || {};
Drupal.gmap.iconpath = "\/sites\/all\/modules\/gmap\/markers";
Drupal.gmap.icondata = {"\/small\/":{"f":["shadow.png","red.png","bred.png","orange.png","pyellow.png","yellow.png","pgreen.png","green.png","dgreen.png","fgreen.png","pblue.png","lblue.png","blue.png","dblue.png","purple.png","pink.png","bpink.png","brown.png","white.png","lgray.png","gray.png","black.png","altblue.png","altred.png"],"w":[22,12],"h":[20],"i":[[[["defaults","small red","small bred","small orange","small pyellow","small yellow","small pgreen","small green","small dgreen","small fgreen","small pblue","small lblue","small blue","small dblue","small purple","small pink","small bpink","small brown","small white","small lgray","small gray","small black","alt small blue","alt small red"],["","Small Red","Small Bright red","Small Orange","Small Pale Yellow","Small Yellow","Small Pale Green","Small Green","Small Dark Green","Small Flouro Green","Small Pale Blue","Small Light Blue","Small Blue","Small Dark Blue","Small Purple","Small Pink","Small Bright Pink","Small Brown","Small White","Small Light Gray","Small Gray","Small Black","Small Blue (Alternate)","Small Red (Alternate)"],[[],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23]],[7,0],[19,0],[10,0],[2,0],[0]],[[],[],[],[],[],[],[],[],[],[],[],[]]]]},"\/flat\/":{"f":["x.png"],"w":[16],"h":[16],"i":[[[["defaults","treasure"],["","X marks the spot"],[[],[0]],[8,0],[8,0],[8,0],[8,0]],[[],[],[],[],[],[],[],[],[],[],[],[]]]]},"\/big\/":{"f":["shadow.png","blue.png","red.png"],"w":[56,30],"h":[51],"i":[[[["defaults","big blue","big red"],["","Big Blue","Big Red"],[[],[1],[2]],[16,0],[51,0],[24,0],[4,0],[0]],[[],[],[],[],[],[],[],[],[],[],[],[]]]]},"\/":{"f":["blue.png","gray.png","green.png","lblue.png","orange.png","pink.png","purple.png","white.png","yellow.png","marker_sunday.png","marker_monday.png","marker_tuesday.png","marker_wednesday.png","marker_thursday.png","marker_friday.png","marker_saturday.png","letter1.png","letter2.png","letter3.png","letter4.png","letter5.png","letter6.png","letter7.png","letter8.png","letter9.png","letter10.png","blank.png","cluster.png","drupal.png","vertex.png","number1.png","number2.png","number3.png","number4.png","number5.png","number6.png","number7.png","number8.png","number9.png","number10.png","number11.png","number12.png","number13.png","number14.png","number15.png","number16.png","number17.png","number18.png","number19.png","number20.png","number21.png","number22.png","number23.png","number24.png","number25.png","number26.png","route1.png","route2.png"],"w":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,8,20],"h":[34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,8,34],"i":[[[["defaults","blue","gray","green","lblue","orange","pink","purple","white","yellow"],["","Blue","Gray","Green","Light Blue","Orange","Pink","Purple","White","Yellow"],[[],[0],[1],[2],[3],[4],[5],[6],[7],[8]],[10,0],[29,0],[17,0],[3,0]],[[],[],[],[],[],[],[],[],[],[],[],[]]],[[["defaults","sunday","monday","tuesday","wednesday","thursday","friday","saturday","week"],["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Week"],[[],[9],[10],[11],[12],[13],[14],[15],[9,10,11,12,13,14,15]],[10,0],[29,0],[17,0],[3,0]],[[],[],[],[],[],[],[],[],[],[],[],[]]],[[["defaults","letters"],["","Letters"],[[],[16,17,18,19,20,21,22,23,24,25]],[10,0],[29,0],[17,0],[6,0]],[[],[],[],[],[],[],[],[],[],[],[],[]]],[[["defaults","blank","cluster","drupal","vertex"],["","Blank","Cluster","Drupal","Line Vertex"],[[],[26],[27],[28],[29]],[10,0,0,0,4],[29,0,0,0,4],[17,0,0,0,4],[6,0,0,0,4]],[[],[],[],[],[],[],[],[],[],[],[],[]]],[[["defaults","numbers"],["","Numbers"],[[],[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]],[10,0],[29,0],[17,0],[6,0]],[[],[],[],[],[],[],[],[],[],[],[],[]]],[[["defaults","route"],["","Route"],[[],[56,57]],[10,0],[29,0],[17,0],[6,0]],[[],[],[],[],[],[],[],[],[],[],[],[]]]]}};
;

/**
 * @file
 * GMap Markers
 * GMap API version -- No manager
 */

/*global Drupal, GMarker */

// Replace to override marker creation
Drupal.gmap.factory.marker = function (loc, opts) {
  return new GMarker(loc, opts);
};

Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  obj.bind('addmarker', function (marker) {
    obj.map.addOverlay(marker.marker);
  });

  obj.bind('delmarker', function (marker) {
    obj.map.removeOverlay(marker.marker);
  });

  obj.bind('clearmarkers', function () {
    // @@@ Maybe don't nuke ALL overlays?
    obj.map.clearOverlays();
  });
});
;

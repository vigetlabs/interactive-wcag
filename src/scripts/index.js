;(function() {

  'use strict';

  // vars
  var responsibilities = document.querySelector('.filters-responsibility');
  var responsibilityFilters = responsibilities.getElementsByTagName('input');
  var levelFilter = document.querySelector('.filters-level select');

  // events
  var events = function() {
    for (var i = 0, len = responsibilityFilters.length; i < len; i++) {
      responsibilityFilters[i].addEventListener('change', filterByResponsibility);
    }

    levelFilter.addEventListener('change', filterByLevel);
  };

  // functions
  var filterByResponsibility = function() {
    var checked;

    for (var i = 0, len = responsibilityFilters.length; i < len; i++) {
      if (responsibilityFilters[i].checked) checked = responsibilityFilters[i].value;
    }

    document.body.setAttribute('data-responsibility', checked);
    URIHash.set('responsibility', checked);
  };

  var filterByLevel = function() {
    var level = levelFilter.value;

    document.body.setAttribute('data-level', level);
    URIHash.set('level', level);
  };

  var handleHash = function() {
    // level
    var levelHash = URIHash.get('level');
    if (levelHash) {
      document.getElementById(levelHash).selected = true;
      document.body.setAttribute('data-level', levelHash);
    }

    // responsibility
    var responsibilityHash = URIHash.get('responsibility');
    if (responsibilityHash) {
      var check = responsibilities.querySelector('input[value=' + responsibilityHash + ']');
      check.checked = true;

      document.body.setAttribute('data-responsibility', responsibilityHash);
    }
  };

  handleHash();
  filterByResponsibility();
  filterByLevel();
  events();

})();

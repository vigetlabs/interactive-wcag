;(function() {
  'use strict';

  // vars
  var responsibilities = document.querySelector('.filters-responsibility');
  var responsibilityFilters = responsibilities.getElementsByTagName('input');
  var levelFilter = document.querySelector('.filters-level select');
  var wcag = document.getElementById('wcag-content');
  var panels = wcag.querySelectorAll('.panel');
  var roles = wcag.querySelectorAll('[data-role]');
  var levels = wcag.querySelectorAll('[data-level]');

  // events
  var events = function() {
    for (var i = 0, len = responsibilityFilters.length; i < len; i++) {
      responsibilityFilters[i].addEventListener('change', filterByRole);
    }

    levelFilter.addEventListener('change', filterByLevel);
  };

  // functions
  var unSetPanels = function() {
    for (var i = 0, len = panels.length; i < len; i++) {
      panels[i].classList.remove('-hide');
    }
  };

  var setPanels = function() {
    var visibleLevels;
    var visibleGuidelines;

    for (var i = 0, len = panels.length; i < len; i++) {
      visibleLevels = panels[i].querySelectorAll('[data-level]:not(.-hide)');

      if (visibleLevels.length === 0) {
        panels[i].classList.add('-hide');
      } else {
        var visibleCount = 0;

        for (var l = 0, len2 = visibleLevels.length; l < len2; l++) {
          visibleGuidelines = visibleLevels[l].querySelectorAll('[data-guideline]:not(.-hide)');
          visibleCount = visibleCount + visibleGuidelines.length;
        }

        if (visibleCount === 0) {
          panels[i].classList.add('-hide');
        }
      }
    }
  };

  var unSetRoles = function() {
    unSetPanels();

    for (var i = 0, len = roles.length; i < len; i++) {
      roles[i].classList.remove('-hide');
    }
  };

  var setRoles = function(role) {
    var rolesToHide = wcag.querySelectorAll(
      '[data-role]:not([data-role-' + role + '])'
    );

    for (var i = 0, len = rolesToHide.length; i < len; i++) {
      rolesToHide[i].classList.add('-hide');
    }
  }

  var filterByRole = function() {
    var checked;

    for (var i = 0, len = responsibilityFilters.length; i < len; i++) {
      if (responsibilityFilters[i].checked) {
        checked = responsibilityFilters[i].value;
      }
    }

    unSetRoles();

    if (checked !== '') {
      setRoles(checked);
      setPanels();
    }

    document.body.setAttribute('data-role', checked);
    URIHash.set('role', checked);
  }

  var unSetLevels = function() {
    unSetPanels();

    for (var i = 0, len = levels.length; i < len; i++) {
      levels[i].classList.remove('-hide');
    }
  };

  var setLevels = function(level) {
    var levelsToHide = 0;

    if (level === 'a') {
      levelsToHide = wcag.querySelectorAll(
        '[data-level-aa],[data-level-aaa]'
      );
    } else if (level === 'aa') {
      levelsToHide = wcag.querySelectorAll(
        '[data-level-aaa]'
      );
    }

    for (var i = 0, len = levelsToHide.length; i < len; i++) {
      levelsToHide[i].classList.add('-hide');
    }
  };

  var filterByLevel = function() {
    var level = levelFilter.value;

    unSetLevels();
    setLevels(level);
    setPanels();

    URIHash.set('level', level);
  }

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
      var check = responsibilities.querySelector(
        'input[value=' + responsibilityHash + ']'
      );
      check.checked = true;

      document.body.setAttribute('data-responsibility', responsibilityHash);
    }
  }

  handleHash();
  filterByRole();
  filterByLevel();
  events();
})();

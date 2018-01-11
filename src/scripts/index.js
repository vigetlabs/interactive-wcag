;(function() {
  'use strict';

  // vars
  var responsibilities = document.querySelector('.filters-responsibility');
  var responsibilityFilters = responsibilities.getElementsByTagName('input');
  var levelFilter = document.querySelector('.filters-level select');
  var roles = document.querySelectorAll('[data-role]');
  var levels = document.querySelectorAll('[data-level]');

  // events
  var events = function() {
    for (var i = 0, len = responsibilityFilters.length; i < len; i++) {
      responsibilityFilters[i].addEventListener('change', filterByRole);
    }

    levelFilter.addEventListener('change', filterByLevel);
  };

  // functions
  var unSetRoles = function() {
    for (var i = 0, len = roles.length; i < len; i++) {
      roles[i].classList.remove('-hide');
    }
  };

  var setRoles = function(role) {
    var rolesToHide = document.querySelectorAll(
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
    }

    document.body.setAttribute('data-role', checked);
    URIHash.set('role', checked);
  }

  var unSetLevels = function() {
    for (var i = 0, len = levels.length; i < len; i++) {
      levels[i].classList.remove('-hide');
    }
  };

  var setLevels = function(level) {
    if (level === 'a') {
      var levelsToHide = document.querySelectorAll(
        '[data-level-aa],[data-level-aaa]'
      );
    } else if (level === 'aa') {
      var levelsToHide = document.querySelectorAll(
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

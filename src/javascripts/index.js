;(function() {

  'use strict';

  // vars
  var labs = document.querySelector('.filters-lab');
  var labFilters = labs.querySelectorAll('.filters-lab input');
  var levelFilter = document.querySelector('.filters-level select');

  // events
  var events = function() {
    for (var i = 0, len = labFilters.length; i < len; i++) {
      labFilters[i].addEventListener('change', filterByLab);
    }

    levelFilter.addEventListener('change', filterByLevel);
  };

  // functions
  var filterByLab = function() {
    var checked;

    for (var i = 0, len = labFilters.length; i < len; i++) {
      if (labFilters[i].checked) checked = labFilters[i].value;
    }

    document.body.setAttribute('data-lab', checked);
    URIHash.set('lab', checked);
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

    // lab
    var labHash = URIHash.get('lab');
    if (labHash) {
      var check = labs.querySelector('input[value=' + labHash + ']');
      check.checked = true;

      document.body.setAttribute('data-lab', labHash);
    }
  };

  handleHash();
  filterByLab();
  filterByLevel();
  events();

})();

'use strict';
var React = require('react');

var CoverageOverlay = React.createClass({
  render: function() {
    return React.createElement(
      'div',
      {
        className: 'coverage-stats-overlay',
      }
    );
  },
});

var CoverageStats = React.createClass({
  getInitialState: function() { return {}; },

  render: function() {
    var files = ['add.js', 'something.js'].map(function(fname) {
      return React.createElement(
        'li',
        {
          className: 'coverage-stats-file',
        },
        React.createElement(
          'div',
          { className: 'coverage-stats-filename', },
          fname,
          React.createElement(
            'span',
            { className: 'coverage-stats-percentage', },
            '80%'
          )
        )
      );
    });

    return React.createElement('ul', {
      className: 'coverage-stats-files',
    }, files);
  },
});


exports = module.exports = CoverageStats;

'use strict'; /* global document, window */

var React = window.React = require('react');
var Suite = require('./suite');
var CoverageStats = require('./coverage-stats');

var mountNode = document.getElementById('app');
var mockInputData = require('./mock-input');

var TestSuiteStats = React.createClass({
  getInitialState: function() {
    return {
      suites: mockInputData.suites,
      tests: mockInputData.tests,
      passing: true,
      text: '',
    };
  },

  render: function() {
    return React.createElement(Suite, {
      id: 'add.js',
      title: 'add.js',
      root: true,
      suites: this.state.suites,
      tests: this.state.tests,
    });
  },
});

var Suspiro = React.createClass({
  render: function() {
    var coverageStats = React.createElement('div', {
      className: 'col-md-3 coverage-stats',
    }, React.createElement(CoverageStats, {}));

    var testSuites = React.createElement('div', {
      className: 'col-md-9 test-suites',
    }, React.createElement(TestSuiteStats, {}));

    return React.createElement('div', {
        className: 'row'
      },
      coverageStats,
      testSuites
    );
  },
});

React.render(
  React.createElement(Suspiro),
  mountNode
);


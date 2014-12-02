'use strict'; /* global document, window */
var React = window.React = require('react');
var mountNode = document.getElementById('app');
//var mui = require('material-ui');

var Test = React.createClass({
  render: function() {
    return React.createElement('li', {
      className: 'test',
      key: this.props.id,
    }, this.props.title);
  },
});

var Suite = React.createClass({
  render: function() {
    var suiteEls = this.props.suites.map(function(suite) {
      suite.key = suite.id;
      return React.createElement(Suite, suite);
    });

    var testEls = this.props.tests.map(function(test) {
      test.key = test.id;
      return React.createElement(Test, test);
    });

    return React.createElement('ul', {
      className: 'suite',
      key: this.props.id,
    }, suiteEls, testEls);
  },
});

var CoverageStats = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return React.createElement('table', {
      className: 'mui-table'
    });
  },
});

var TestSuiteStats = React.createClass({
  getInitialState: function() {
    var suites = [
      {
        id: 'add.js:add(x, y)',
        title: 'add(x, y)',
        tests: [
          {
            id: 'add.js:add(x, y):add(1, 2) == 3',
            title: 'add(1, 2) == 3',
          },
          {
            id: 'add.js:add(x, y):add(10, 12) == 22',
            title: 'add(10, 12) == 22',
          },
        ],
        suites: [],
      },
    ];

    var tests = [
      {
        id: 'add.js:gets exposed',
        title: 'gets exposed',
      },
    ];

    return {
      suites: suites,
      tests: tests,
      passing: true,
      text: '',
    };
  },

  render: function() {
    return React.createElement(Suite, {
      id: 'add.js',
      title: 'add.js',
      root: true,
      tests: this.state.tests,
      suites: this.state.suites,
    });
  },
});

var Suspiro = React.createClass({
  render: function() {
    return React.createElement(
      'div',
      {
        className: 'wrapper'
      },
      React.createElement(CoverageStats, {
        label: 'Default Label'
      }),
      React.createElement(TestSuiteStats, {
      })
    );
  },
});

React.render(
  React.createElement(Suspiro),
  mountNode
);

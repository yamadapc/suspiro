'use strict';
var _ = require('lodash');
var React = require('react');

/**
 * The root test suites container
 */

var TestSuite = React.createClass({
  render: function() {
    return React.createElement('table', {
      key: this.props.id,
    }, _.flatten(suiteToRow(this.props)));
  },
});

exports = module.exports = TestSuite;

function suiteToRow(suite) {
  var title = React.createElement('td', {
    key: suite.id,
    className: 'suite-title'
  }, suite.title);

  return [
    React.createElement('tr', {
      key: suite.id,
      className: 'suite indent-' + suite.level + (suite.root ? ' root-suite' : ''),
    }, title),
    _.map(suite.suites, suiteToRow),
    _.map(suite.tests, testToRow),
  ];
}

function testToRow(test) {
  var title = React.createElement('td', {
    key: test.id,
    className: 'test-title'
  }, test.title);

  return React.createElement('tr', {
    key: test.id,
    className: 'test indent-' + test.level + (test.passing ? ' pass' : ' fail'),
  }, title);
}

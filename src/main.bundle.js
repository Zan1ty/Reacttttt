'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _createtask = require('./createtask');

var _createtask2 = _interopRequireDefault(_createtask);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tasks = [{
  task: 'complete demo',
  isCompleted: false
}, {
  task: 'make food for other',
  isCompleted: false
}, {
  task: 'starve',
  isCompleted: false
}];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      tasks: tasks
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Demo Application'
        ),
        _react2.default.createElement(_createtask2.default, { tasks: this.state.tasks, createTask: this.createTask.bind(this) }),
        _react2.default.createElement(_tasks2.default, {
          tasks: this.state.tasks,
          toggleTask: this.toggleTask.bind(this),
          saveTask: this.saveTask.bind(this),
          deleteTask: this.deleteTask.bind(this)
        })
      );
    }
  }, {
    key: 'createTask',
    value: function createTask(task) {
      this.state.tasks.push({
        task: task,
        isCompleted: false
      });

      this.setState({ tasks: this.state.tasks });
    }
  }, {
    key: 'toggleTask',
    value: function toggleTask(task) {
      var foundTask = _lodash2.default.find(this.state.tasks, function (tasksvar) {
        return tasksvar.task === task;
      });
      foundTask.isCompleted = !foundTask.isCompleted;
      this.setState({ tasks: this.state.tasks });
    }
  }, {
    key: 'saveTask',
    value: function saveTask(oldTask, newTask) {
      var foundTask = _lodash2.default.find(this.state.tasks, function (tasksvar) {
        return tasksvar.task === oldTask;
      });
      foundTask.task = newTask;
      this.setState({ tasks: this.state.tasks });
    }
  }, {
    key: 'deleteTask',
    value: function deleteTask(task) {
      _lodash2.default.remove(this.state.tasks, function (tasksvar) {
        return tasksvar.task === task;
      });
      this.setState({ tasks: this.state.tasks });
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

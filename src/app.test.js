import React from 'react';
import { shallow } from 'enzyme';
import App from './app.js';

test('tasklist contains task 1', () => {
  const taskList = require('App');
  expect(taskList.tasks).toContain('task 1');
});

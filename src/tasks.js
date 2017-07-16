import React from 'react';
import Taskheader from './taskheader';
import Lodash from 'lodash';
import TaskListItem from './tasklistitem';

export default class Tasks extends React.Component
{
  renderItems()
  {
      return Lodash.map(this.props.tasks, (task, index) => <TaskListItem key={index}
      {...task} toggleTask={this.props.toggleTask} saveTask={this.props.saveTask}
      deleteTask={this.props.deleteTask}/>);
  }

    render() {
      return(
        <table>
          <Taskheader />
          <tbody>{this.renderItems()}</tbody>
        </table>
      );
    }
}

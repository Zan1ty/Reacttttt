import React from 'react';
import Tasks from './tasks';
import CreateTask from './createtask';
import Lodash from 'lodash';

const tasks = [
  {
    task: 'task 1',
    isCompleted: false
  },
  {
    task: 'task 2',
    isCompleted: false
  },
  {
    task: 'task 3',
    isCompleted: false
  }
];

export default class App extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      tasks
    };
  };

  render () {
    return(
      <div>
        <h1>Demo Application</h1>
        <CreateTask tasks={this.state.tasks} createTask={this.createTask.bind(this)}/>
        <Tasks
        tasks={this.state.tasks}
        toggleTask={this.toggleTask.bind(this)}
        saveTask={this.saveTask.bind(this)}
        deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  };

  createTask(task)
  {
      this.state.tasks.push({
        task,
        isCompleted: false
      });

      this.setState({tasks: this.state.tasks});
  }

  toggleTask(task)
  {
    const foundTask = Lodash.find(this.state.tasks, tasksvar => tasksvar.task === task );
    foundTask.isCompleted = !foundTask.isCompleted;
    this.setState({ tasks: this.state.tasks });
  }

  saveTask(oldTask, newTask)
  {
      const foundTask = Lodash.find(this.state.tasks, tasksvar => tasksvar.task === oldTask );
      foundTask.task = newTask;
      this.setState({ tasks: this.state.tasks });
  }

  deleteTask(task)
  {
      Lodash.remove(this.state.tasks, tasksvar => tasksvar.task === task );
      this.setState({ tasks: this.state.tasks });
  }


}

function testMeth(a, b)
{
  return a + b;
}
module.exports = testMeth;

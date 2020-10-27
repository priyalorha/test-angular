import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo';
  todos = [
    {
      label: 'Clean your room',
      done: false,
      priority: 'high'
    },
    {
      label: 'Go on a walk',
      done: false,
      priority: 'low'
    },
    {
      label: 'buy medicines',
      done: false,
      priority: 'medium'
    },
    {
      label: 'buy groceries',
      done: false,
      priority: 'high'
    }
    
  ];

  addTodo(newTodoLabel)
  {
    var newTodo = {
      label : newTodoLabel,
      priority: 'medium',
      done : false
    };
    this.todos.push(newTodo)
  }

  deleteTodo(todo)
  {
    this.todos = this.todos.filter(
      t => t.label !== todo.label);
  }
}

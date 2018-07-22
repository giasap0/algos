import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { CategoryService } from './categories/category.service';
import { Todo } from './todo/todo';
import { Category } from './categories/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ TodoService, CategoryService ]
})
export class AppComponent implements OnInit {

  title = 'app';
  newTodo : Todo = new Todo()
  newCategory : Category = new Category();
  selectedCategory : Category

  constructor(private todoSrv: TodoService, private categorySrv: CategoryService){

  }

  ngOnInit(): void {
    let tempCategory = new Category();
    tempCategory = {'name' : 'Today', 'id' : 1 , };
    this.addInitialCategory(tempCategory);
    tempCategory = {'name' : 'Tomorrow', 'id' : 2 , };
    this.addInitialCategory(tempCategory);
    tempCategory = {'name' : 'Work', 'id' : 3 , };
    this.addInitialCategory(tempCategory);
    tempCategory = {'name' : 'Holidays', 'id' : 4 , };
    this.addInitialCategory(tempCategory);
    tempCategory = {'name' : 'Shopping list', 'id' : 5 , };
    this.addInitialCategory(tempCategory);

    let initTodo = new Todo();
    initTodo = {'title' : 'Task1', 'complete': false, 'id' : 1 , category: 1 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Task2', 'complete': true, 'id' : 2 , category: 2 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Task3', 'complete': true, 'id' : 3 , category: 1 };
    this.addInitialTodo(initTodo);
  }

  addTodo() {
    this.newTodo.category = this.selectedCategory.id;
    this.todoSrv.addTodo(this.newTodo);
    this.newTodo = new Todo();
    console.log(this.todos);
  }

  toggleTodoComplete(todo: Todo) {
    this.todoSrv.toggleTodoComplete(todo);
  }

  removeTodo(todo: Todo) {
    this.todoSrv.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoSrv.getAllTodos();
  }

  get todosForCat() {
    return this.todoSrv.getTodoByCategory(this.selectedCategory.id);
  }

  countTodosByCat(id: number) {
    return this.todoSrv.getTodoByCategory(id).length;
  }

  addCategory() {
    this.categorySrv.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  removeCategory(category: Category) {
    this.categorySrv.deleteCategoryById(category.id);
  }

  get categories() {
    return this.categorySrv.getAllCategories();
  }

  categoryById(id: number) {
    return this.categorySrv.getCategoryById(id);
  }

  addInitialCategory(category: Category) {
    this.categorySrv.addCategory(category);
  }

  addInitialTodo(todo: Todo) {
    this.todoSrv.addTodo(todo);
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}

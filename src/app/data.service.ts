import { Injectable } from '@angular/core';
import {List} from './list.interface';
import {Task} from './task.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  lists: Array < List > ;

  constructor() {
    //this.lists = [];
    this.load();
  }

  getLists() {
    return this.lists;

  }

  addList(lName: string) {
    if (lName.trim().length !== 0) {
      let newList: List = {
        name: lName,
        tasks: []
      }

      this.lists.push(newList);
      this.save();
    }

  }

  addTask(tName: string, list: List) {
    let newTask: Task = {
      name: tName,
      completed: false
    }
    list.tasks.push(newTask);
    this.save();
  }

  deleteList(list) {
    let index = this.lists.indexOf(list);
    this.lists.splice(index, 1);
    this.save();
  }

  deleteTask(task, list) {
    let index = list.indexOf(task);
    list.splice(index, 1);
    this.save();
  }

  save() {
    localStorage.setItem('lists', JSON.stringify(this.lists))
  }

  load() {
    this.lists = JSON.parse(localStorage.getItem('lists')) || [];
  }
}

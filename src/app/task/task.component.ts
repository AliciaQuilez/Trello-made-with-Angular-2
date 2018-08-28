import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;
  @Input() currentList;
  serv: DataService;
  editing: boolean = false;

  constructor(serv: DataService) {
    this.serv = serv;
   }

  ngOnInit() {
  }

  deleteTaskComp(task, currentList){
    this.serv.deleteTask(task, currentList);
  }


  startEditing(input){
    this.editing = true;
    input.focus();
  }

  finishEditing(){
    this.editing = false;
    this.serv.save();
  }
  
}

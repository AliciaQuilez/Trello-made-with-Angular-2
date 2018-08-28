import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() list;
  serv: DataService;
  taskName;

  constructor(serv: DataService) {
    this.serv = serv;
  }

  ngOnInit() {}

  addNewTask(taskName, list) {
    if (taskName.trim().length !== 0) {
      this.serv.addTask(taskName, list);
    }
    this.taskName = '';
  }

  deleteListComp(list) {
    this.serv.deleteList(list);
  }

}

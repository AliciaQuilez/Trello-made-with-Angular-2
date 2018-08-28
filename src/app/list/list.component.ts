import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list;
  serv:DataService;
  taskName;
  
  constructor(serv:DataService){
    this.serv= serv;
  }

  ngOnInit() {
  }

  addNewTask(taskName,list){
    this.serv.addTask(taskName,list);
  }

  deleteListComp(list){
    this.serv.deleteList(list);
  }

}

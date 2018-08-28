import { Component } from '@angular/core';
import {List} from './list.interface';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: Array <List>;
  serv: DataService;
  listName;

  constructor(serv:DataService){
    this.lists = serv.getLists();
    this.serv= serv;
  }

  addNewList(){
    this.serv.addList(this.listName);
    this.listName = '';
  }
}

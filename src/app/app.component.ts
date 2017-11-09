import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  recent  = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  alltime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  leaders100 = [];
  leadersall = [];
  leaders = [];
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get<JSON[]>(this.recent).subscribe( data => {this.leaders = data; this.leaders100 = data;});
    this.http.get<JSON[]>(this.alltime).subscribe( data => { this.leadersall = data;});
  }

  settTorecent(){
  this.leaders = this.leaders100;
  }
  setToAlltime(){
    this.leaders = this.leadersall;
  }
}

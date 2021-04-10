import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {

  public guest: string;
  public company: string;
  public room: string;
  public data: any;
  constructor(private http: HttpClient) {
    this.guest = 'Ethan';
    this.company = 'California Hotels';
    this.room = 'Room 304';
   }

  ngOnInit(): void {
    this.http.get("assets/select_messages.json").subscribe((data) => {
      console.log(data)
      this.data = data;
      //this.data = data.messages[0].templates.title
      // for (let i = 0; i < data.messages.length; i++) {
      //   for (let x of data.messages[i].title) {
      //     //console.log("SOME", x.name);
      //     this.data.push(x.name)

      //   }

      //   // for (let x of data.buildings[i].workers) {
      //   //   // console.log("SOME", x.name);
      //   //   this.workers.push(x.name)
      //   // }


      //   //this.name.push(data.buildings[i].name)

      // }

      //this.data = data
    })
  }

  onSubmitMessage(data) {
    this.guest = data.guest;
    this.company = data.company;
    this.room = data.room;
  }

}

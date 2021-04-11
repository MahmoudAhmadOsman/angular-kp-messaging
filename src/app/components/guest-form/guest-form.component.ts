import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';

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
  public messageTitle: any;
  public messageAppend: any;

  constructor(private http: HttpClient) {
   
    this.company = 'California Hotels';
    this.room = 'Room 304';

  
   }

  ngOnInit(): void {

  }


  //Randam Messages
   onSubmitMessage(data) {
     this.http.get("assets/select_messages.json").subscribe((res) => {
      
      //console.log("DATA", res)
      if (data.title === 'fmt') {
        this.messageTitle = res['messages'][0].welcome
        this.messageAppend = res['messages'][0].message_append
      }
      else if (data.title === 'smt') {
        this.messageTitle = res['messages'][1].welcome
        this.messageAppend = res['messages'][1].message_append
      }
      else if (data.title === 'thmt') {
        this.messageTitle = res['messages'][2].welcome
        this.messageAppend = res['messages'][2].message_append
      }
      
    })

    // console.log("FORM DATA", data.title)
    this.guest = data.guest;
    this.company = data.company;
    this.room = data.room;
    
  }

}

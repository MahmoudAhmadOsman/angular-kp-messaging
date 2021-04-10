import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})

  
export class MessagingComponent implements OnInit {

  public getGreeting: any;
  @Input() guestName: string;
  @Input() companyName: string;
  @Input() room: string
  public messageTemplate: string
  messageWelcome: any;
  messageAppend: any;
  constructor(private http: HttpClient, public translate: TranslateService) { }

  ngOnInit(): void {
    const getDateNow = [
      [0, 4, "Good night"],
      [5, 11, "Good morning"],
      [12, 17, "Good afternoon"],
      [18, 24, "Good evening"]
    ]

    let getHour = new Date().getHours()
    for (let i = 0; i < getDateNow.length; i++) {
      if (getHour >= getDateNow[i][0] && getDateNow[i][1]) {
        this.getGreeting = getDateNow[i][2]
      }
    }


    // read local json fileReplacements
    this.http.get("assets/guest_company.json").subscribe((data) => {
      this.guestName = data['data'][0]['guest']
      this.companyName = data['data'][0]['company']
      this.room = data['data'][0]['room']
    })

    // read local json fileReplacements
    this.http.get("assets/messages.json").subscribe((data) => {
      //console.log(typeof(data['messages'][0]['message']))
      this.messageWelcome = data['messages'][0]['welcome']
      this.messageAppend = data['messages'][0]['message_append']
    })
  }

}

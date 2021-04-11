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
  @Input() messageTitle: any;
  @Input() messageAppend: any;

  //Ramdan names, comapny and reservation
  public firstName: string[] = [];
  public lastName: [];
  public reservationRoom: string[] = [];
  public companyNames: string[] = [];



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


    // Read data from local json file
    this.http.get("assets/Companies.json").subscribe(async (res: any) => {
      for (let i = 0; i < res.length; i++) {
        console.log("Randam Companies ", res)
        await this.companyNames.push(res[i].company)
      }
      let showRandomCompanyName = await this.companyNames[Math.floor(Math.random() * this.companyNames.length)]
      this.companyName = showRandomCompanyName





    })




    this.http.get("assets/Guests.json").subscribe(async (res: any) => {
      //console.log("RANDOM DATA", res)
      for (let i = 0; i < res.length; i++) {
        let guestAndRoom = res[i].firstName + "-" + res[i].reservation.roomNumber
        await this.firstName.push(guestAndRoom)
      }
      //this.firstName = res.firstName.Math.floor(Math.random();

      let showRandomGuestAndRoom = await this.firstName[Math.floor(Math.random() * this.firstName.length)]
      let showNameAndRoom = showRandomGuestAndRoom.split('-')  
      this.guestName = showNameAndRoom[0]
      this.room = showNameAndRoom[1]
    })

    // read local json 
    this.http.get("assets/messages.json").subscribe((data) => {
      //console.log(typeof(data['messages'][0]['message']))
      this.messageTitle = data['messages'][0]['welcome']
      this.messageAppend = data['messages'][0]['message_append']
    })
  }

}

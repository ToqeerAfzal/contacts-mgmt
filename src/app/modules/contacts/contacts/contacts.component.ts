import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/app.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  contacts:Contact[]=[
    {
      title:"Nicholas Gordon",
      position:"Developer"
    },
    {
      title:"Bradley Malone",
      position:"Sales Manager"
    },
    {
      title:"Johanna Stevens",
      position:"Project Manager"
    },
    {
      title:"Marvin Lambert",
      position:"Designer"
    },
    {
      title:"Nicholas Gordon",
      position:"Developer"
    },
    {
      title:"Bradley Malone",
      position:"Sales Manager"
    },
    {
      title:"Johanna Stevens",
      position:"Project Manager"
    },
    {
      title:"Marvin Lambert",
      position:"Designer"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

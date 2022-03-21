import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/app.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  contacts:Contact[]=[];
  contactId:string='';
  showLoader=false;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.showLoader=true;
    this.appService.getContacts().subscribe((data:any)=>{
      this.contacts=data;
      this.contactId=data[0].id;
      this.showLoader=false;
    },
    err=>{
      console.log(err);
      this.showLoader=false;
    })
  }

  getDetails(id:string){
    this.contactId=id;
  }
}

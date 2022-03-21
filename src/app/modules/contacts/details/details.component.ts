import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/app.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  showLoader=false;
  private _contactId: string='';

  @Input() set contactId(value: string) {

    this._contactId = value;
    this.getContact();

  }

  get categoryId(): string {

    return this._contactId;

  }
  contact: Contact = {};
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  getContact() {
    this.showLoader=true;
    this.appService.getContactDetail(this._contactId).subscribe((data: any) => {
      this.showLoader=false;
      this.contact = data;
    },
      err => {
        this.showLoader=false;
        console.log(err);
      })
  }

}

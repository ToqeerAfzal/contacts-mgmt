import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/app.interface';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.sass']
})
export class ContactItemComponent implements OnInit {

  @Input() contact:Contact={};
  constructor() { }

  ngOnInit(): void {
  }

}

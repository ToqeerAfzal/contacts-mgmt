import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ContactItemComponent,
    ContactsComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }

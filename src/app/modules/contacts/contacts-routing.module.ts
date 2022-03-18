import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path:'',
    component:ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

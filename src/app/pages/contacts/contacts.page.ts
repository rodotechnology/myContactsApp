import { Component, OnInit } from '@angular/core';
import { Icontacts } from 'src/app/interfaces/icontacts';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: Icontacts['results'] = []

  constructor(private contactsSrv: ContactsService) { }

  ngOnInit() {

    this.contactsSrv.getContacts().subscribe( (response) => {
      // console.log(response.results)
      this.contacts = response.results
      // console.table(this.contacts)
    })

  }

}

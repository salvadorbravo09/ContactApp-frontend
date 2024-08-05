import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../model/contact.interface';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export default class ContactListComponent implements OnInit {
  private contactService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  delete(contact: Contact) {
    this.contactService.deleteContact(contact.id).subscribe(() => {
      this.loadAll();
    });
  }

  // Funcion reutilizable
  loadAll() {
    this.contactService.listContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../model/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);

  listContacts() {
    return this.http.get<Contact[]>('http://localhost:8080/api/contact');
  }

  getContact(id: number) {
    return this.http.get<Contact>(`http://localhost:8080/api/contact/${id}`);
  }

  createContact(contact: Contact) {
    return this.http.post<Contact>('http://localhost:8080/api/contact', contact);
  }

  updateContact(id: number, contact: Contact) {
    return this.http.put<Contact>(`http://localhost:8080/api/contact/${id}`, contact);
  }

  deleteContact(id: number) {
    return this.http.delete<void>(`http://localhost:8080/api/contact/${id}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from 'src/app/models/contact';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class PhonebookDataService {
  private contactsUrl = 'http://localhost:3004/contacts'

  constructor(private http: HttpClient) {
  }

  saveContact(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrl, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put<Contact>(this.contactsUrl + `/${contact.id}`, contact);
  }

  getContacts(filterTerm: string | undefined): Observable<Contact[]> {
    if (filterTerm === undefined)
      return this.http.get<Contact[]>(this.contactsUrl, httpOptions);
    else
      return this.http.get<Contact[]>(this.contactsUrl + `?firstName_like=${filterTerm}`, httpOptions);
  }

}

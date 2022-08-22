import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactState } from '../../store/reducer/contact.reducer';
import { selectContacts } from '../../store/selector/contact.selectors';
import {loadContacts} from "../../store/action/contact.actions";

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<ContactState>) {
    console.log("constructor");
    this.contacts$ = this.store.pipe(select(selectContacts));
    this.store.dispatch(loadContacts());
   }

  ngOnInit(): void {
  }

}

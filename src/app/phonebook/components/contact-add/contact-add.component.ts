import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from 'src/app/models/contact';
import { saveContact } from '../../store/action/contact.actions';
import { ContactState } from '../../store/reducer/contact.reducer';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  formData!: FormGroup;

  constructor(private store: Store<ContactState>, private builder: FormBuilder) {

  }

  addContact(contact: Contact): void {
    this.store.dispatch(saveContact(contact));
  }

  ngOnInit(): void {
    this.formData = this.builder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
      })
  }

}

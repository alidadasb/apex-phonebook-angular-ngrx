import {createAction, props} from '@ngrx/store';
import {Contact} from 'src/app/models/contact';

export const saveContact = createAction(
  '[Contact] Save Contact',
  (contact: Contact) => ({contact})
);

export const saveContactsSuccess = createAction(
  '[Contact] Save Contact Success',
  props<{ contact: any }>()
);

export const loadContacts = createAction('[Contact] Load Contacts');

export const loadContactsSuccess = createAction(
  '[Contact] Load Contacts Success',
  props<{ data: Contact[] }>()
);

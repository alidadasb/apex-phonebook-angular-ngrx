import {createReducer, on} from '@ngrx/store';
import {Contact} from 'src/app/models/contact';
import {loadContactsSuccess, saveContactsSuccess} from '../action/contact.actions';


export const contactFeatureKey = 'contact';

export interface ContactState {
  contacts: Contact[];
}

export const initialState: ContactState = {
  contacts: []
};

export const reducer = createReducer(
  initialState,
  on(saveContactsSuccess,
    (state: ContactState, {contact}) =>
      ({
        ...state,
        contacts: [...state.contacts, contact]
      })),
  on(loadContactsSuccess,
    (state: ContactState, {data}) => {
      console.log(data);
      return {
        ...state,
        contacts: [...data]
      }
    })
);

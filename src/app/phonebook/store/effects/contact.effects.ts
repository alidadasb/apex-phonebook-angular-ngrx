import {Injectable} from "@angular/core";
import {PhonebookDataService} from "../../service/phonebook-data.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadContacts, loadContactsSuccess, saveContact, saveContactsSuccess} from "../action/contact.actions";
import {map, mergeMap} from "rxjs/operators";

@Injectable()
export class ContactEffects {
  constructor(private actions: Actions, private phonebookService: PhonebookDataService) {
  }

  loadContacts$ = createEffect((): any => {
    return this.actions.pipe(
      ofType(loadContacts),
      mergeMap(() => {
        return this.phonebookService.getContacts(undefined)
          .pipe(map(contacts => {
            console.log('loading contacts', contacts);

            return loadContactsSuccess({data: contacts})
          }));
      })
    )
  })

  saveContacts$ = createEffect((): any => {
    return this.actions.pipe(
      ofType(saveContact),
      mergeMap(({contact}) => {
        return this.phonebookService.saveContact(contact)
          .pipe(map(contact => {
            console.log('loading contacts', contact);

            // saveContactsSuccess({contact})
          }));
      })
    )
  })
}

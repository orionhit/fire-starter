/* tslint:disable */
import { Inject, Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { NotificationService } from '../notification.service'

@Injectable()
export class NotificationEffects {

  @Effect()
  protected notify: Observable<Action> = this.actions$
    .ofType('NOTIFY')
    .map(toPayload)
    .mergeMap((payload) => {
        this.notificationService.toast(payload)
        return null
      }
    );

  constructor(
    @Inject(Actions) public actions$: Actions,
    private notificationService: NotificationService,
  ) {}
}
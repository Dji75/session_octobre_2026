import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { addEntity, removeEntity, withEntities } from '@ngrx/signals/entities';
import { User } from '../models/user.model';
import { withEventHandlers, event, Events } from '@ngrx/signals/events';
import { effect, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { dashboardFeature } from '../../../shared/store/dashboard-store';
import { count, tap } from 'rxjs';

const increment = event('[User Store] Increment')

export const userStore = signalStore(
  withState({ count: 0 }),
  withEntities<User>(),
  withMethods((store) => ({
    add: (user: User) => patchState(store, addEntity(user)),
    remove: (id: User['id']) => patchState(store, removeEntity(id))
  })),
  withHooks((store, ngrxStore = inject(Store)) => ({
    onInit() {
      // on store init
      effect( () => {
        // do stuff on ngrx selector change
        ngrxStore.selectSignal(dashboardFeature.selectAge);

      });
    },
    onDestroy() {
      // on store destroy
    }
  })),
  withEventHandlers((store, events = inject(Events)) => ({
    // do stuff in a similar way you previously did in NGRX Effects
    logCount$: events.on(increment).pipe(
      tap(({ type }) => console.log(type, store.count())),
    ),
  }))
);

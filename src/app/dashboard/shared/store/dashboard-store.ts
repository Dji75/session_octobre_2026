import { createAction, createFeature, createReducer, createSelector, on, props } from '@ngrx/store';
import { FormModel } from '../models/form.model';

export const saveFormValue = createAction('[dashboard] Save Form', props<{ value: FormModel }>());
// écriture à avoir si on ne veut pas saveFormValue({ value: xxx }) dans l'appel de l'action mais juste saveFormValue(xxx)
// export const saveFormValue = createAction('[dashboard] Save Form', ({ type, ...value}: FormModel & Action) => value);

interface State {
  name: string;
  age: number;
}

const initialState: State = {
  name: '',
  age: 0,
}


export const dashboardFeature  = createFeature({
  name: 'dashboard',
  reducer: createReducer(
    initialState,
    on(saveFormValue, (state, { value }) => ({ ...state, name: value.username, age: value.age })),
    // on(saveFormValue, (state, { value }) => {
    //   // DO NOT USE THIS PATTERN: store should be immutable
    //   state.name = value.username
    //   return state;
    // }),
  ),
  extraSelectors: ({ selectName, selectAge }) => ({
    hello: createSelector(selectName, selectAge, (name, age) => age < 30 ? `${name} est un jeune homme` : `${name} est plus agé ;)`),
  })
});


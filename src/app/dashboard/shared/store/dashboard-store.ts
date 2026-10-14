import { createAction, createFeature, createReducer, on, props } from '@ngrx/store';
import { FormModel } from '../models/form.model';

export const saveFormValue = createAction('[dashboard] Save Form', props<{ value: FormModel }>());

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
  ),
});

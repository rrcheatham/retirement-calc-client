import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {retirementCalcReducer} from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        calc: retirementCalcReducer
    })
);
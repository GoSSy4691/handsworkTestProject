import { createStore, combineReducers } from 'redux';
import listEventsReducer from './listEventsReducer';

const rootReducer = combineReducers({
  listEvents: listEventsReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;
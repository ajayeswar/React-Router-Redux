import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { catchError } from 'rxjs/operators';
// import ping, { pingEpic } from './ping';
// import users, { fetchUserEpic } from './users';

const epics= [];

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export const rootReducer = combineReducers({});

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}
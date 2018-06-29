import createHistory from "history/createBrowserHistory";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";

// todo: export this middleware to external file
export const history = createHistory();

const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

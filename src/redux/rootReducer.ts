import { combineReducers } from "redux";
import { reducer as formReducer} from 'redux-form'
import weatherReducer from "./weatherReducer";

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

let rootReducer = combineReducers({
    weather: weatherReducer,
    form: formReducer
})

export default rootReducer
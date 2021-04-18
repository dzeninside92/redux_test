//Подключаем redux`овский стор и комбайн редюсер
import {createStore, combineReducers, applyMiddleware} from "redux";
//Импортируем редюсеры
import {cashReducer} from "./cashReducer";
import {customerReducer} from './customerReducer'
//DEV - TOOLS
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})


//Создал redux`овский СТОР, стор принимает редюсеры
//передаем сторе в компонент провайдер - командой експорт
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//Подключил редакс-фанк, перед этим передал мидлвер applyMiddleware вторым параметром
//в Креэйт стор, сам applyMiddleware это метод редакса
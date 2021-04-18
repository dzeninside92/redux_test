import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    //Hook useDispatch
    const dispatch = useDispatch();
    //Hook useSelector - Получаем состояние
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customer.customers);


    const addCash = (cash) => {
        //Изменяем состояние диспатчем
        //Диспатч принимает экшен
        // Экшен это обьект с полем тайп
        dispatch({type: "ADD_CASH", payload: cash})
    }
    const getCash = (cash) => {
        //Изменяем состояние диспатчем
        //Диспатч принимает экшен
        // Экшен это обьект с полем тайп
        dispatch({type: "GET_CASH", payload: cash})
    }


    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        // dispatch({type: "ADD_CUSTOMER", payload: customer})
        dispatch(addCustomerAction(customer))
    }
    const removeCustomer = (customer) => {
        // dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div>
            <div>{cash}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>ПОПОЛНИТЬ СЧЕТ</button>
                <button onClick={() => getCash(Number(prompt()))}>СНЯТЬ СО СЧЕТА</button>

                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => removeCustomer()}>Удалить клиента</button>

                <button onClick={() => dispatch(fetchCustomers())}>Получать клиентов из базы</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={()=> removeCustomer(customer)}>{customer.name}</div>
                    )}
                </div>
                :
                <div>
                    Клиенты отсутствуют
                </div>


            }
        </div>
    );
}

export default App;

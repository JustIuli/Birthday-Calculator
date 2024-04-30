import '../src/assets/main.css';
import '../src/assets/reset.css';
import '../src/assets/root.css';
import iconArrow from './assets/icon-arrow.svg';
import { ChangeEvent, Reducer, useReducer, useState } from "react";
import getDateDifference from "./utils/getDateDifference.ts";
import {Action, State} from "./Types.ts";
import validateDate from "./utils/validateDate.ts";
const initialState: State = {
    day: '',
    month: '',
    year: ''
};
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_DAY':
            return { ...state, day: action.payload || '' };
        case 'SET_MONTH':
            return { ...state, month: action.payload || '' };
        case 'SET_YEAR':
            return { ...state, year: action.payload || '' };
        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);
    const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
    };

    const handleClick = () => {
        if (!validateDate(state)) return;

        const { day, month, year } = state;
        const difference = getDateDifference(parseInt(day, 10), parseInt(month, 10), parseInt(year, 10));

        setAge({
            years: difference.years,
            months: difference.months,
            days: difference.days
        });
    };

    return (
        <div className="app-container">
            <div className="date-entry">
                <div className="date-entry-wrapper">
                    <label htmlFor="day">DAY</label>
                    <input
                        type="number"
                        className="input-day"
                        id="day"
                        name="day"
                        placeholder="DD"
                        max="31"
                        value={state.day}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="date-entry-wrapper">
                    <label htmlFor="month">MONTH</label>
                    <input
                        type="number"
                        className="input-month"
                        id="month"
                        name="month"
                        placeholder="MM"
                        max="12"
                        value={state.month}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="date-entry-wrapper">
                    <label htmlFor="year">YEAR</label>
                    <input
                        type="number"
                        className="input-year"
                        id="year"
                        name="year"
                        placeholder="YYYY"
                        max="2024"
                        value={state.year}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="button-1-container">
                <button onClick={handleClick} className="button-1" id="button-click">
                    <img
                        src={iconArrow}
                        alt="arr"
                        className="icon-arrow"
                    />
                </button>
            </div>
            <div className="output-container">
                <div className="output-row-wrapper">
                    <p className="output-years-data output-data" id="p-years">{age.years}</p>
                    <p className="out-years-string">years</p>
                </div>
                <div className="output-row-wrapper">
                    <p className="output-month-data output-data" id="p-months">{age.months}</p>
                    <p className="out-month-string">months</p>
                </div>
                <div className="output-row-wrapper">
                    <p className="output-days-data output-data" id="p-days">{age.days}</p>
                    <p className="out-days-string">days</p>
                </div>
            </div>
        </div>
    );
};

export default App;

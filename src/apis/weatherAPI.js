import axios from "axios";
import { updatedMasterData } from '../redux/actions';

export const getActualTemperature = (params, selectedCityData) => {
    return dispatch => {
        return axios.get('https://api.openweathermap.org/data/2.5/weather', { params })
            .then(res => {
                if (res.status === 200) {
                    selectedCityData.actualTemp = convertKelvinToCelsius(res.data.main.temp);
                    selectedCityData.status = getStatus(selectedCityData.guessedTemp, selectedCityData.actualTemp);
                    selectedCityData.display = true;
                    dispatch(updatedMasterData(selectedCityData));
                } else {
                    console.error('Error in fetch temperature');
                }
            })
            .catch(err => {
                console.error('Error in fetch temperature');
            });
    };
}

const convertKelvinToCelsius = (kelvinValue) => {
    return Math.round(kelvinValue - 273.15);
};

const getStatus = (guessedValue, actualValue) => {
    return Math.abs(actualValue - guessedValue) <= 5;
};
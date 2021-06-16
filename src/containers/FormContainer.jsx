import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMasterData } from '../redux/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormContainer = ({ selectedId, selectedCityData, dispatch }) => {

    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        setCity(selectedCityData.city);
        setTemperature(selectedCityData.guessedTemp);

    }, [selectedCityData]);

    const onTemperatureChange = (event) => {
        setTemperature(parseFloat(event.target.value));

    };

    const handleCheck = () => {
        let updatedCityData = selectedCityData;
        updatedCityData.guessedTemp = temperature;
        dispatch(fetchMasterData(updatedCityData));

    };

    return (
        <>
            <div>{`City: ${city}`}</div>
            <div>
                <TextField
                    label="Guess the Temp"
                    variant="outlined"
                    type="number"
                    value={temperature}
                    onChange={onTemperatureChange}
                />
            </div>
            <div>
                <Button variant="contained" onClick={handleCheck} >Check It</Button>
            </div>
        </>
    )
};
const mapStateToProps = state => {
    return {
        selectedId: state.temperatureData.selectedId,
        selectedCityData: state.temperatureData.selectedCityData
    };
}
export default connect(mapStateToProps)(FormContainer);
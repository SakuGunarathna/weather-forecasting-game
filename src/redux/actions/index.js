import { getActualTemperature } from '../../apis/weatherAPI';

export const updateSelectedId = (id) => ({
  type: "UPDATE_SELECTED_ID",
  payload: id
});

export const updatedMasterData = (selectedCityData) => ({
  type: "UPDATE_MASTER_DATA",
  payload: selectedCityData
});

export const fetchMasterData = (selectedCityData) => {
  const param = { q: selectedCityData.city, appid: "dba163026ff4b0c82f5554f8c314b615" }
  return getActualTemperature(param, selectedCityData);
};

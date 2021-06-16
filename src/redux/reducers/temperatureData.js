import { MasterData } from "../../data/masterData";

const initState = {
    masterData: MasterData,
    selectedCityData: MasterData.find((data) => data.id === 1),
    selectedId: 1,
    displayStatus: false
};

const temperatureData = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SELECTED_ID":
            return {
                ...state,
                selectedCityData: state.masterData.find((data) => data.id === action.payload),
                selectedId: action.payload
            };

        case "UPDATE_MASTER_DATA":
            const updatedMasterData = state.masterData.map((data) => {
                if (data.id !== state.selectedId) {
                    return data
                }
                return {
                    ...data,
                    ...action.payload
                }
            });
            if (action.payload.id === 5) {
                return {
                    ...state,
                    masterData: updatedMasterData,
                    displayStatus: true
                }
            } else {
                return {
                    ...state,
                    masterData: updatedMasterData,
                    selectedId: state.selectedId + 1,
                    selectedCityData: state.masterData.find((data) => data.id === state.selectedId + 1)
                }
            }

        default:
            return state;
    }

};
export default temperatureData;
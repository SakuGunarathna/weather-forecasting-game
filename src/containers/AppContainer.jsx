import { connect } from 'react-redux';
import { FormContainer, Dashboard } from '.';
import { DisplayStatus } from '../components';
import '../styles/AppContainer.css';

const AppContainer = ({ displayStatus }) => (
    <div className='div-app-cont'>
        {displayStatus ? <DisplayStatus /> : <FormContainer />}
        <Dashboard />
    </div>
);
const mapStateToProps = state => {
    return { displayStatus: state.temperatureData.displayStatus };
}
export default connect(mapStateToProps)(AppContainer);
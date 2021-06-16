import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/DisplayStatus.css';

const DisplayStatus = ({ masterData }) => {
    const [statusText, setStatusText] = useState('');

    useEffect(() => {
        const winningCount = masterData.filter((data) => data.status === true).length;
        winningCount >= 3 ? setStatusText('WON') : setStatusText('FAILED');

    }, [])

    return (
        <div className='div-status-text'>{`YOU ${statusText}`}</div>
    )
};
const mapStateToProps = state => {
    return { masterData: state.temperatureData.masterData };
}
export default connect(mapStateToProps)(DisplayStatus);
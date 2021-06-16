import { connect } from 'react-redux';
import { DashboardTile } from '../components';

const Dashboard = ({ masterData }) => {

    return (
        <>
            {masterData.length > 0 &&
                masterData.map((data) => (
                    data.display && <DashboardTile key={data.id} {...data} />
                ))
            }
        </>
    )
};
const mapStateToProps = state => {
    return { masterData: state.temperatureData.masterData };
}
export default connect(mapStateToProps)(Dashboard);
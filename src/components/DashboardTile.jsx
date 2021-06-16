import '../styles/DashboardTile.css';

const DashboardTile = ({ city, guessedTemp, actualTemp, status }) => (
    <div className={`div-dash-tile ${status ? 'div-color-success' : 'div-color-fail'}`}>
        <div>{`City: ${city}`}</div>
        <div>{`You guessed: ${guessedTemp}`}</div>
        <div>{`Actual: ${actualTemp}`}</div>
    </div>
);
export default DashboardTile;
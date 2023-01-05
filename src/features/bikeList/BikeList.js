import { useSelector } from 'react-redux';
import Continent from '../continent/Continent';
import Country from '../country/Country';
import './BikeList.css';
import '../../App.css';

const BikeList = () => {
  const isDetailSelected = useSelector((state) => state.bikeList.isDetailSelected);

  return (
    <>
      <div id="continent-div" className={isDetailSelected ? 'hidden' : 'continent-result'}>
        <Continent />
      </div>
      <div id="country-div" className={isDetailSelected ? 'country-result' : 'hidden'}>
        <Country />
      </div>
    </>
  );
};

export default BikeList;

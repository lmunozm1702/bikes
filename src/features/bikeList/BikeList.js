import { useSelector } from 'react-redux';
import Continent from '../continent/Continent';
import Country from '../country/Country';
import '../../App.css';

const BikeList = () => {
  const isDetailSelected = useSelector((state) => state.bikeList.isDetailSelected);

  return (
    <>
      <div id="continent-div" className={isDetailSelected ? 'hidden' : 'continent-result'}>
        <Continent />
      </div>
      <div id="country-div" className={isDetailSelected ? 'country-result' : 'hidden'}>
        {isDetailSelected ? <Country /> : null}
      </div>
    </>
  );
};

export default BikeList;

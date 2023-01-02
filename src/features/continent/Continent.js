import { useDispatch, useSelector } from 'react-redux';
import { filterByCountry } from '../bikeList/BikeListReducer';
import '../../App.css';

const Continent = () => {
  const countryBikeList = useSelector((state) => state.bikeList.countryBikeList);
  const totalProviders = useSelector((state) => state.bikeList.totalProviders);
  const dispatch = useDispatch();

  const countryHandleClick = (event) => {
    event.preventDefault();
    dispatch(filterByCountry(event.target.id));
  };

  return (
    <>
      <div>
        <div>Europe</div>
        <div>{totalProviders}</div>
      </div>
      <ul>
        {countryBikeList
          && Object.keys(countryBikeList).map((country) => (
            <li key={country}>
              <div role="button" id={country} onClick={countryHandleClick} onKeyDown={countryHandleClick} tabIndex={0}>
                <div id={country}>
                  {country}
                </div>
                <div id={country}>{countryBikeList[country].length}</div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Continent;

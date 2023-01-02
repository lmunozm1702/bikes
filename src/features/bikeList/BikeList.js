import { useDispatch, useSelector } from 'react-redux';
import { filterByCountry, backToContinent } from './BikeListReducer';
import './BikeList.css';

const BikeList = () => {
  const countryBikeList = useSelector((state) => state.bikeList.countryBikeList);
  const citiesBikeList = useSelector((state) => state.bikeList.citiesBikeList);
  const totalProviders = useSelector((state) => state.bikeList.totalProviders);
  const isDetailSelected = useSelector((state) => state.bikeList.isDetailSelected);

  const dispatch = useDispatch();

  const countryHandleClick = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    dispatch(filterByCountry(event.target.id));
  };

  const backHandlerClick = (event) => {
    event.preventDefault();
    dispatch(backToContinent());
  };

  return (
    <>
      <div className={isDetailSelected ? 'hidden' : 'continent-result'}>
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
      </div>

      <div className={isDetailSelected ? 'country-result' : 'hidden'}>
        <div>
          <button type="button" onClick={backHandlerClick}>Back</button>
        </div>
        <ul>
          {citiesBikeList
            && Object.keys(citiesBikeList).map((city) => (
              <li key={city}>
                <div>
                  <div>
                    {city}
                  </div>
                  <div id={city}>{citiesBikeList[city].length}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BikeList;

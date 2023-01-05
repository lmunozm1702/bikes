import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { backToContinent } from '../bikeList/bikeListReducer';
import contNames from '../staticData';
import './Country.css';

const Country = () => {
  const countryBikeList = useSelector((state) => state.bikeList.countryBikeList);
  const citiesBikeList = useSelector((state) => state.bikeList.citiesBikeList);
  const country = useSelector((state) => state.bikeList.selectedCountry);
  const dispatch = useDispatch();

  const backHandlerClick = (event) => {
    event.preventDefault();
    dispatch(backToContinent());
  };

  return (
    <>
      <div className="nav-status">
        <div className="nav-back" onClick={backHandlerClick} role="button" onKeyDown={backHandlerClick} tabIndex={0}>
          <div><FontAwesomeIcon icon={faChevronLeft} /></div>
          <div className="nav-continent">Continents</div>
        </div>
        <div className="nav-title">town/city companies</div>
        <div className="nav-right">
          <div><FontAwesomeIcon icon={faMicrophone} /></div>
          <div><FontAwesomeIcon icon={faGear} /></div>
        </div>
      </div>
      <div id="city-container-div" className="city">
        <div className="city-map" style={{ backgroundImage: `url(/img/${country}.png)` }} />
        <div className="city-info">
          <div className="title" id={country}>
            {contNames[country] ? contNames[country].toUpperCase() : null}
          </div>
          <div className="title-metrics city-metrics" id={country}>
            {countryBikeList
              && countryBikeList[country] ? countryBikeList[country].length : 0}
            {' '}
            {countryBikeList
              && countryBikeList[country].length === 1 ? 'company' : 'companies'}
          </div>
        </div>
      </div>
      <div className="title-bar title-metrics">
        CITY/TOWN BREAKDOWN
      </div>
      <ul>
        {citiesBikeList
          && Object.keys(citiesBikeList).map((city) => (
            <li className="city-item" key={city}>
              <div className="title">
                {city}
              </div>
              <div className="city-detail">
                <div className="title-metrics" id={city}>
                  {citiesBikeList[city].length}
                  {' '}
                  {citiesBikeList[city].length === 1 ? 'company' : 'companies'}
                </div>
                <div><FontAwesomeIcon icon={faArrowAltCircleRight} /></div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Country;

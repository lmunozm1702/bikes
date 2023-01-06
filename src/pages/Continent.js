import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { filterByCountry } from '../Component/bikeListReducer';
import contNames from './staticData';
import './App.css';
import './Continent.css';

const Continent = () => {
  const countryBikeList = useSelector((state) => state.bikeList.countryBikeList);
  const totalProviders = useSelector((state) => state.bikeList.totalProviders);
  const isDetailSelected = useSelector((state) => state.bikeList.isDetailSelected);
  const country = useSelector((state) => state.bikeList.selectedCountry);

  const dispatch = useDispatch();

  const countryHandleClick = (event) => {
    event.preventDefault();
    dispatch(filterByCountry(event.nativeEvent.submitter.id));
  };

  if (isDetailSelected) {
    return (
      <Navigate
        to={{
          pathname: `/:${country}`,
        }}
      />
    );
  }

  return (
    <>
      <div className="nav-status">
        <div className="nav-back">
          <div><FontAwesomeIcon icon={faChevronLeft} /></div>
          <div className="nav-continent">Continents</div>
        </div>
        <div className="nav-title">europe</div>
        <div className="nav-right">
          <div><FontAwesomeIcon icon={faMicrophone} /></div>
          <div><FontAwesomeIcon icon={faGear} /></div>
        </div>
      </div>

      <div className="continent">
        <div className="continent-img" style={{ backgroundImage: 'url(/img/europe.png)' }} />
        <div className="continent-title">
          <div className="continent-item title">EUROPE</div>
          <div className="continent-item title-metrics">
            {totalProviders}
            {' '}
            companies.
          </div>
        </div>
      </div>
      <div className="title-bar title-metrics">
        INFO BY COUNTRY
      </div>

      <div id="country-container-div" className="country-container">
        <form className="country-form" onSubmit={countryHandleClick}>
          {countryBikeList
            && Object.keys(countryBikeList).map((country) => (
              <button type="submit" id={country} className="country-div" key={country} style={{ backgroundImage: `url(/img/${country}.png)` }}>
                <div id={country} className="div-info"><div id={country} className="awesome-icon"><FontAwesomeIcon id={country} icon={faArrowAltCircleRight} /></div></div>
                <div className="div-info">
                  <div><span id={country} className="title">{contNames[country].toUpperCase()}</span></div>
                  <div><span id={country} className="title-metrics">{countryBikeList[country].length}</span></div>
                </div>
              </button>
            ))}
        </form>
      </div>
    </>
  );
};

export default Continent;

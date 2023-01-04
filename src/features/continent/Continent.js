import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { filterByCountry } from '../bikeList/BikeListReducer';
import contNames from '../staticData';
import '../../App.css';
import './Continent.css';
import europe from '../../images/europe.png';

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
        <div className="continent-img">
          <img src={europe} alt="europe" />
        </div>
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
      <ul className="countries-list">
        {countryBikeList
          && Object.keys(countryBikeList).map((country) => (
            <li className="test" key={country} style={{ backgroundImage: `url(/img/${country}.png)` }}>
              <div className="countries-item" role="button" id={country} onClick={countryHandleClick} onKeyDown={countryHandleClick} tabIndex={0}>
                <div className="country-map">
                  <div className="awesome-icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></div>
                </div>
                <div className="country-info">
                  <div className="title" id={country}>
                    {contNames[country].toUpperCase()}
                  </div>
                  <div className="title-metrics" id={country}>{countryBikeList[country].length}</div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Continent;

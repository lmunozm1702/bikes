import { useSelector, useDispatch } from 'react-redux';
import { backToContinent } from '../bikeList/BikeListReducer';

const Country = () => {
  const citiesBikeList = useSelector((state) => state.bikeList.citiesBikeList);
  const dispatch = useDispatch();

  const backHandlerClick = (event) => {
    event.preventDefault();
    dispatch(backToContinent());
  };

  return (
    <>
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
    </>
  );
};

export default Country;

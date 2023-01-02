import { useSelector } from 'react-redux';

const BikeList = () => {
  const groupedBikeList = useSelector((state) => state.bikeList.countryBikeList);
  const totalProviders = useSelector((state) => state.bikeList.totalProviders);

  const countryHandleClick = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <div>
        <div>Europe</div>
        <div>{totalProviders}</div>
      </div>
      <ul>
        {groupedBikeList
          && Object.keys(groupedBikeList).map((country) => (
            <li key={country}>
              <div role="button" id={country} onClick={countryHandleClick} onKeyDown={countryHandleClick} tabIndex={0}>
                <div id={country}>
                  {country}
                </div>
                <div id={country}>{groupedBikeList[country].length}</div>
              </div>

            </li>
          ))}
      </ul>
    </>
  );
};

export default BikeList;

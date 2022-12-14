import { getLocationById } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './LocationDetails.module.css';

const LocationDetails = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);
  let id = locationId;

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId)
        .then(response => setLocation(response.data))
        .catch(error => setError(error.message));
    }
  }, [locationId]);

  return (
    <>
      <BtnGoBack id={id} />
      {location.name && error === null ? (
        <section className={s.section}>
          <h1 className={s.title}>{location.name}</h1>
          <ul className={s.list}>
            <li className={s.item}>
              <span>Id: </span>
              {location.id}
            </li>
            <li className={s.item}>
              <span>Type: </span>
              {location.type}
            </li>
            <li className={s.item}>
              <span>Dimension: </span>
              {location.dimension}
            </li>
            <li className={s.item}>
              <span>Created: </span>
              {location.created}
            </li>
          </ul>
        </section>
      ) : (
        <>{error}</>
      )}
    </>
  );
};

export default LocationDetails;

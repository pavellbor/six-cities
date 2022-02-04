import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offer';

type MapProps = {
  city: City;
  points: Offer[];
  selectedPoint: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 50],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 50],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker.setIcon(selectedPoint !== null && point.title === selectedPoint.title ? currentCustomIcon : defaultCustomIcon).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
}

export default Map;

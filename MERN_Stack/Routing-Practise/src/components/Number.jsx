import { useParams } from 'react-router-dom';

export default function Number() {
  const { value } = useParams();
  return (
    <h1 style={{ textAlign: 'center', color: 'purple'}}>
      The number is: {value}
    </h1>
  );
}
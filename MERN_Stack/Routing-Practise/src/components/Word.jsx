import { useParams } from 'react-router-dom';

export default function Word() {
  const { value } = useParams();
  return (
    <h1 style={{ textAlign: 'center' }}>
      The word is: {value}
    </h1>
  );
}
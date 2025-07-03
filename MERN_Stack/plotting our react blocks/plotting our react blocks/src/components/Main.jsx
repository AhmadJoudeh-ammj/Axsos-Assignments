import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

export default function Main() {
  return (
    <div className="main">
      <div className="subcontent-row">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  );
}

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

function Features() {
  return (
    <div className='features'>
      <div>
        <img src={icon1} alt='icon1' />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon2} alt='icon2' />
        <h3>Components</h3>
        <p>Build encapsulated that manage their state.</p>
      </div>
      <div>
        <img src={icon3} alt='icon3' />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={icon4} alt='icon4' />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Features;

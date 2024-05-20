import Counter from './Components/Custom-Hooks/Counter';
import './App.css'
import withCounter from './Components/HOC/withCounter';
import CounterHoc from './Components/HOC/Counter';

// Wrap Counter component with the higher-order component and Now this withCounter component return enhanced component.
const CounterWithCounterHOC = withCounter(CounterHoc);
function App() {
  return (
    <div className="app-container">
      //Counter component have initialValue 0 
       <Counter initialValue={0} />
       <CounterWithCounterHOC message="Hello, World!" />;
    </div>
   
  );
}

export default App;

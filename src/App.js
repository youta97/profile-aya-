
import './App.css';
import Taswira from './component/profilecom/taswira';
import FullName from './component/profilecom/FullName';
import Adress from './component/profilecom/Adress';
function App() {
  return (
    <div> 
      <Taswira />
      <div className='name'>
      <FullName />
      </div>
      <div className='adress'>
      <Adress /> 
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Doctor from './components/Doctor';
import Account from './components/Account';
import Discount from './components/Discount';
import More from './components/More';
function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/dr-visit" element={<Doctor/>}/>
<Route path="/account" element={<Account/>}/>
<Route path="/discount-card" element={<Discount/>}/>
<Route path="/gwrx-and-more" element={<More/>}/>


</Routes>

</BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import Master from './Master';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master />}>
       <Route index element={<FirstComponent />} />
       <Route path="first" element={<FirstComponent />} />
       <Route path="second" element={<SecondComponent />} />
       <Route path="third" element={<ThirdComponent />} />
     </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

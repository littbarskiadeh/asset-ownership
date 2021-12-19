import Login from './components/Login/Login';
import Form from './components/Form/Form';
import Assets from './components/Assets/Assets';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact  element={<Login />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/assets" exact element={<Assets />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

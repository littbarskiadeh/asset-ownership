import Login from './components/Login/Login';
import Form from './components/Form/Form';

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
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';

import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Seats from './components/seats/seats';

function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Seats />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;


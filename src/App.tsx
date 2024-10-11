import React from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/store/store';
import TabNavigation from './navigation/TabNavigation';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}

export default App;

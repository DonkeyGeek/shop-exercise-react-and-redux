import React from 'react';
import PhoneContainer from './components/PhoneContainer'
import TvContainer from './components/tvContainer'
import CommentsContainer from './components/CommentsContainer'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
        <TvContainer />
      </div>
      <CommentsContainer />
    </Provider>
  );
}

export default App;

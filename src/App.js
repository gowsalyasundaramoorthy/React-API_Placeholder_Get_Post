import React from 'react'
import './App.css';

import DataFetchPosts from './Component/DataFetchPosts';
import DataFetchUsers from './Component/DataFetchUsers';
import FetchUsers_Posts from './Component/FetchUsers_Posts';


function App() {
  return (
    <div className="App">
      {/* <DataFetchUsers /> */}
      {/* <DataFetchPosts /> */}

      <FetchUsers_Posts />

      


    </div>
  );
}

export default App;



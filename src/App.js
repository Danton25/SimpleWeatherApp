import React from 'react';

const api = {
  key: "dd131eeab13f83d267f839a6d7c59f90",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
        <main>
          <div className="search-box">
            <input 
            type = "text" 
            className = "search-bar" 
            placeholder = "Search...">
            </input>
          </div>
        </main>
    </div>
  );
}

export default App;

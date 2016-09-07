import React from 'react';

import datas from './data.json';

const App = React.createClass({
  render: function() {
    console.log(datas);
    return (
      <div className="app container-fluid">
        App
      </div>
    );
  }
});

export default App;

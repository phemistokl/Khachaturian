import React from 'react';

import datas from '../public/data.json';

import load from './utils/load';

const App = React.createClass({
  getInitialState() {
    return {
      data: null
    };
  },

  componentDidMount() {
      load(datas).then(users => {
        this.initialData = JSON.parse(users);
        this.setState({
          data: this.initialData
        });
      });
  },

  render: function() {
    return (
      <div className="app container-fluid">
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-10">
          {this.state.data}
        </div>
      </div>
      </div>
    );
  }
});

export default App;

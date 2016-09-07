import React from 'react';
import UserList from './components/UserList';

import load from './utils/load';

const App = React.createClass({
  getInitialState() {
    return {
      data: null,
      term: '',
      active: 0
    };
  },

  componentDidMount() {
      load(this.props.data).then(users => {
        this.initialData = JSON.parse(users);
        this.setState({
          data: this.initialData
        });
      });
  },

  updateData(config) {
    this.setState(config);
  },

  render: function() {
    return (
      <div className="app container-fluid">
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-10">
          <UserList data={this.state.data} update={this.updateData.bind(this)} />
        </div>
      </div>
      </div>
    );
  }
});

export default App;

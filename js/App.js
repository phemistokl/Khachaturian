import React from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import Searchbar from './components/Searchbar';
import Toolbar from './components/Toolbar';

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

  render() {
  return (
    <div className="app container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <Searchbar
            term={this.state.term}
            data={this.initialData}
            update={this.updateData.bind(this)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 col-md-3 col-lg-2">
          <ActiveUser data={this.state.data} active={this.state.active} />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10">
          <UserList data={this.state.data} update={this.updateData.bind(this)} />
        </div>
      </div>

    </div>
  );
}
});

export default App;

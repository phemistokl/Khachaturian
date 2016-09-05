import React, { Component } from 'react';
import UserList from './components/UserList';
import load from './utils/load';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: ''
    };

    this.loadData();
  }

  loadData() {
    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="app container-fluid">

        <div className="row">
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList data={this.state.data} />
          </div>
        </div>

      </div>
    );
  }
}

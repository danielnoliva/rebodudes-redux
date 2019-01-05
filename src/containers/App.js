import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField } from "../actions";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">
          {this.state.robots.length ? "RoboDudes" : "Loading"}
        </h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

import { cheeseQuery, setCheeseResult } from "../action/cheeseName";

const mapStateToProps = (state, ownProps) => ({
  value: state.cheese.query
});

const mapDispatchToProps = dispatch => bindActionCreators({ cheeseQuery, setCheeseResult }, dispatch);

class SearchBar extends React.Component {
  render() {
    console.log(`This is props ${this.props.value}`);
    return (
      <form>
        <input type="text"
          placeholder="Search By Cheese"
          value={this.props.value}
          onChange={event => this.props.cheeseQuery(event.target.value)}
          />
        <Button onClick={(event) => {
          // console.log('Inside of submit function');
          event.preventDefault();
          this.props.setCheeseResult(this.props.value);
        }}>Sumbit Cheese</Button>
      </form>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

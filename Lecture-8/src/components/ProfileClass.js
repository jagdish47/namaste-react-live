import React from "react";

class Profile extends React.Component {
  //In class based component render is only Mandotary method

  constructor(props) {
    super(props);

    // in function based component we have to create different hooks for differnt state in class based component we create all in one state

    this.state = {
      count: 0,
      count1: 0,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>This is Profile of : Class Based Component</h1>
        <h2>{this.props.name}</h2>
        <h1>COUNT : {this.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          setCount
        </button>
      </>
    );
  }
}

export default Profile;

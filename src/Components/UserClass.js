import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        Login: "XXXX",
        id: "0000",
      },
    };
    console.log(this.props.name + " child Constructer called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yashu004unique");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);

    console.log(this.props.name + " child componentDidMount called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log(this.props.name + " child componentDidUpdate called");
  }
  render() {
    const { name, location } = this.props; //destructuring
    const { count, count2 } = this.state;
    console.log(this.props.name + " child render called");
    return (
      <div className="user-card">
        {/* <h1>Count = {this.state.count}</h1>
        <h1>Count2 = {this.state.count2}</h1> */}
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        {/* <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>

        {/* data using api call */}
        <h4>Login: {this.state.userInfo.login}</h4>
        <h4>ID: {this.state.userInfo.id}</h4>
      </div>
    );
  }
}

export default UserClass;

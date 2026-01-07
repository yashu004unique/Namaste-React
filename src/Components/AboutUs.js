// import User from "./User";
// import UserClass from "./UserClass";

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <User name={"Yashu"} location={"Vizag"} />
//       <UserClass name={"Yashu Class"} location={"Vizag class"} />
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log(" parent Constructer called");
  }
  componentDidMount() {
    console.log(" parent componentDidMount called");
  }

  render() {
    console.log(" parent render called");
    return (
      <div>
        <h1>About Us</h1>
        <User name={"Yashu"} location={"Vizag"} />
        <UserClass name={"Child 1"} location={"Vizag class"} />
        {/* <UserClass name={"Child 2"} location={"Vsp class"} /> */}
      </div>
    );
  }
}
export default AboutUs;

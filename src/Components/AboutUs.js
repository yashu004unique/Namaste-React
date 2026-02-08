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

// Class Component
import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/Context/UserContext";

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
      <div className="flex flex-col items-center mt-15">
        <h1 className="font-bold text-2xl mb-4">About Us</h1>
        <h1 className="mb-3">(Just for Practice of Class Components)</h1>
        <div className="mb-4 space-y-4">
          <User name={"Yashu"} location={"Vizag"} />
          <UserClass name={"Child 1"} location={"Vizag class"} />
        </div>
        {/* <UserClass name={"Child 2"} location={"Vsp class"} /> */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>User: {loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default AboutUs;

import React, {Component} from "react";
import NavBar from "./NavBar";

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="w-screen h-screen z-10">
        <NavBar signedIn={this.props.signedIn} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout
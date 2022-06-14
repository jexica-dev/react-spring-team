import React, { Component } from "react";
import Layout from "../Components/Layout/Layout";
import ThreejsScreen from "../Components/Threejs/ThreejsScreen";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }


  render() {
    return (
      <div className="">
        <Layout signedIn={this.props.signedIn}>
          <ThreejsScreen />
        </Layout>
      </div>
    );
  }
}

export default Home

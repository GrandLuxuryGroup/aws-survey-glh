import React from "react";
import FinalStep from '../components/FinalStep';

class FinalPage extends React.Component {

  render() {
    return (
      <React.Fragment>
          <div style={{marginTop:'30px'}}/>
          <FinalStep message="Thank you for taking the time to complete this survey." />
      </React.Fragment>
   
    );
  }
}

export default FinalPage;
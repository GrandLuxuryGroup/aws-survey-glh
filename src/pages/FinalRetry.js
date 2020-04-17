import React from "react";
import FinalStep from '../components/FinalStep';

class FinalRetry extends React.Component {

  render() {
    return (
      <React.Fragment>
          <div style={{marginTop:'30px'}}/>
          <FinalStep message="You already submitted your weekly survey. Survey cannot be submitted more than once per week. Should you have any question, please contact your account manager." />
      </React.Fragment>
   
    );
  }
}

export default FinalRetry;
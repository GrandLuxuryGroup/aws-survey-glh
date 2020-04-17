import React from "react";
import FinalStep from '../components/FinalStep';

class ErrorPage extends React.Component {

  render() {
    return (
      <React.Fragment>
          <div style={{marginTop:'30px'}}/>
          <FinalStep message="An Error occurs during the saving of your survey ! Please report the issue to us !" />
      </React.Fragment>
   
    );
  }
}

export default ErrorPage;
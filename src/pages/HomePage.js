import React from "react";
import SurveyComponent from '../components/SurveyComponent';
import { UserContext} from '../AppWithAuth';

class HomePage extends React.Component {

  render() {
    return (
        <UserContext.Consumer>
        {({ userAttributes }) =>
            <React.Fragment>
                <div style={{marginTop:'30px'}}/>
                <SurveyComponent userAttributes={userAttributes} hotelLocation={this.props.hotelLocation}/>
                
            </React.Fragment>
        }
        </UserContext.Consumer>
    );
  }
}

export default HomePage;
import React from "react";
import SurveyComponent from '../components/SurveyComponent';
import { UserContext} from '../AppWithAuth';

class HomePage extends React.Component {

  render() {
    return (
        <UserContext.Consumer>
        {({ userAttributes }) =>
            <React.Fragment>
                <div style={{marginTop:'30px', marginLeft : '50px'}}/>
                <div style={{marginLeft : '20px'}}>Please be very accurate when filling-in this survey, as the data cannot be modified once submitted. Figures will automatically feed our Covid-19 reporting tool.</div>
                <div style={{marginTop:'30px'}}/>
                <SurveyComponent userAttributes={userAttributes} hotelLocation={this.props.hotelLocation}/>
                
            </React.Fragment>
        }
        </UserContext.Consumer>
    );
  }
}

export default HomePage;
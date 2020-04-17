import React from "react";
import {Auth, Hub}  from 'aws-amplify';
import Navbar from './components/NavBar'
import Logo from './images/GL-Group-BLACK-RVB.jpg';
import { Authenticator } from "aws-amplify-react";
import { graphqlOperation, API } from "aws-amplify";
import createBrowserHistory from 'history/createBrowserHistory';
import { listFirstLogins } from "./graphql/queries";
import { Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage'
import FinalPage from './pages/FinalPage';
import FinalRetry from './pages/FinalRetry';
import "@aws-amplify/ui/dist/style.css";


export const UserContext = React.createContext();

export const history = createBrowserHistory();

class AppWithAuth extends React.Component {
  state = {
      user : null,
      userAttributes : null,
      hotelLocation : "",
  }

  componentDidMount() {
    this.getUserData();
    Hub.listen('auth', this, 'onHubCapsule');
  }

  getUserData = async () => { 
    try {
      
        const user = await  Auth.currentAuthenticatedUser();
        this.setState({ hotelLocation : '' })
        console.log('Get User data : ' + user);
        user ? this.setState({user}, () => this.getUserAttributes(this.state.user)) : this.setState({user : null});
        console.log(user.attributes.sub);
        const firstLogins = await API.graphql(graphqlOperation(listFirstLogins,  {
          filter: {
              Sub: {
                  eq: user.attributes.sub
              }
          }
        }));
        console.log(firstLogins);
        console.log(firstLogins.data.listFirstLogins.items);
        if (firstLogins.data.listFirstLogins.items.length > 0) {
          console.log(firstLogins.data.listFirstLogins.items[0].LocationHotel);
          this.setState({ hotelLocation : firstLogins.data.listFirstLogins.items[0].LocationHotel })
          console.log(this.state.hotelLocation);
        }
    } catch(err)
    {
      console.error('Error getting user data', err);
    }
  }

  getUserAttributes = async authUserData  => {
    const attributesArr = Auth.userAttributes(authUserData).then(data => {
      const attributesObj = Auth.attributesToObject(data);
      this.setState({ userAttributes : attributesObj });
    });

  }

  handleSignOut = async () =>{
    try {
      history.push('/');
      await Auth.signOut()
    } catch(err){
      console.error('Error signing out the user', err);
    }
  }

  onHubCapsule = capsule => {
    switch (capsule.payload.event) {
      case "signIn" :
        console.log('signed in');
        console.log(capsule.payload.event);
        console.log(this.state.userAttributes);
        this.getUserData();
        break;
      case "signUp":
          console.log('signed up');
          console.log(capsule);
        break;
      case "signOut":
        console.log('signed out');
        this.setState({user: null});
        break;
      default : 
        return;
    }
  }

 

  render() {

    

    const { user, userAttributes } = this.state;
    
    const signUpConfig = {
        hiddenDefaults: ["phone_number"]
        /*,
        signUpFields: [
            {
                label: 'Hotel Name',
                key: 'custom:HotelName',
                required: true,
                placeholder: 'Hotel Name',
                type: 'string',
                displayOrder: 4,
              }
        ]*/
        //hideAllDefaults: true,
        /*signUpFields: [
            {
                label: 'UserName',
                key: 'username',
                required: true,
                placeholder: 'UserName',
                type: 'email',
                displayOrder: 1,
              },
          {
            label: 'Email',
            key: 'email',
            required: true,
            placeholder: 'Email',
            type: 'email',
            displayOrder: 2,
          },
          {
            label: 'Password',
            key: 'password',
            required: true,
            placeholder: 'Password',
            type: 'password',
            displayOrder: 3,
          },
          ,
        ]*/,
      }
    return (
        !user ?  (
            <>
            <div style={{alignContent:'center'}}>
                <img src={Logo} alt="GLH Logo" style={{width:'250px',display: 'block', margin: 'auto', marginBottom:'0px' , marginTop:'20px'}}></img>
            </div>
            <Authenticator signUpConfig={signUpConfig}/>
            <div style={{margin: 'auto', width: '80%',border: '1px solid red',padding: '0px', textAlign:'center'}}>
              <p><span  style={{fontWeight:600}}>IMPORTANT INFORMATION</span></p>
              <p>
The information collected in this survey is completely anonymous. Your personal details will only be used to secure access to the interface, but never stored.
The objective of this Covid-19 monitoring tool is to enable our partner hotels to identify markets with signs of recovery, and to have a global overview of the situation. The results generated each week are for information purposes only and Grand Luxury assumes no liability or responsibility for their use.
</p>
            </div>
            </>
          ) : (
            <UserContext.Provider value={{ user, userAttributes}}>
                <Router history={history}> 
                    <React.Fragment>
                        <Navbar user={user} handleSignOut={this.handleSignOut}/>
                    
                        <Route exact path="/"  component={() => <HomePage user={user} userAttributes={userAttributes} hotelLocation={this.state.hotelLocation}/>} />
                        <Route exact path="/Final" component ={FinalPage} />
                        <Route exact path="/FinalRetry" component ={FinalRetry} />
                        <Route exact path="/Error" component ={ErrorPage} />
                    </React.Fragment>
                </Router>
            </UserContext.Provider>)
  
    );
  }
}

export default AppWithAuth;
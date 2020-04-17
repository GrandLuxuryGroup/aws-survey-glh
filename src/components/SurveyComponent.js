import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { createSurvey, createTracking, createFirstLogin, createClientCountry } from "../graphql/mutations";
import { listTrackings } from '../graphql/queries';
import { graphqlOperation, API } from "aws-amplify";
import { history } from '../AppWithAuth';
import firstSurvey from '../survey/FirstServey';
import finalSurvey from '../survey/FinalSurvey';

Survey.StylesManager.applyTheme("orange");

class SurveyComponent extends Component {

  state = {
    isCompleted : false,
    finalResult : ""
  }

  onCompleteComponent = async (result) => {
    var hotelLocation="";
    try {
      console.log(this.props.hotelLocation);
      if (this.props.hotelLocation === ""){
        hotelLocation = result.data.HotelLocation;
        await API.graphql(graphqlOperation(createFirstLogin, {input:{'Email':this.props.userAttributes.email, 'Sub':this.props.userAttributes.sub,'LocationHotel':result.data.HotelLocation}}));
      } else {
        hotelLocation = this.props.hotelLocation;
      }

      const trakings = await API.graphql(graphqlOperation(listTrackings,  {
          filter: {
              and : [{
              Sub: {
                  eq: this.props.userAttributes.sub
              },
              Week:{
                eq : 'W1'
              }
            }]
          }
        }));

      if (trakings.data.listTrackings.items.length === 0) {
       console.log(result.data);
       console.log(this.props.hotelLocation);

        var Week = 'W1'

        //Page1 
        var HotelLocation = hotelLocation;
        var IsHotelClosed = result.data.IsHotelClosed;
        var HotelReopeningDate = result.data.HotelReopeningDate;
        var IsHotelContainmentZone = result.data.isHotelContainmentZone;
        var HotelContainmentEndDate = result.data.HotelContainmentEndDate;

        //Page 2

        var NbBookings = result.data.NbBookings;
        var NbRoomNightsBooked = result.data.NbRoomNightsBooked;
        var NbRoomNightsCanceled = result.data.NbRoomNightsCanceled;
        var SplitTotalRoomsBusinessSegment = result.data['SplitTotalRoomsBusinessSegment'];

        var  NbRoomNightsBookedFIT = 0;
        var  NbRoomNightsBookedMICE = 0;
        var  NbRoomNightsBookedCorporate = 0;
        var  RemainingRoomNightsBySegment = 0;
        if (SplitTotalRoomsBusinessSegment) {
          NbRoomNightsBookedFIT = SplitTotalRoomsBusinessSegment['FIT']? SplitTotalRoomsBusinessSegment['FIT'].NbRoomsNightsBS : 0;
          NbRoomNightsBookedMICE = SplitTotalRoomsBusinessSegment['MICE']?SplitTotalRoomsBusinessSegment['MICE'].NbRoomsNightsBS: 0;
          NbRoomNightsBookedCorporate = SplitTotalRoomsBusinessSegment['Corporate']?SplitTotalRoomsBusinessSegment['Corporate'].NbRoomsNightsBS : 0;
        }
    
        RemainingRoomNightsBySegment = result.data['SplitTotalRoomsBusinessSegment-total'].NbRoomsNightsBS;
     
        
        var RoomsNightsSplit = result.data['RoomsNightsSplit'];
        var RoomNightsCountry1 = null;
        var NbRoomNightsBookedCountry1 = 0;
        var RoomNightsCountry2 = null;
        var NbRoomNightsBookedCountry2 = 0;
        var RoomNightsCountry3 = null;
        var NbRoomNightsBookedCountry3 = 0;
        var RoomNightsCountry4 = null;
        var NbRoomNightsBookedCountry4 = 0;
        var RoomNightsCountry5 = null;
        var NbRoomNightsBookedCountry5 = 0;
        if (RoomsNightsSplit) {
            RoomNightsCountry1 = RoomsNightsSplit['Country1']?RoomsNightsSplit['Country1'].Country?RoomsNightsSplit['Country1'].Country:null:null;
            NbRoomNightsBookedCountry1 = RoomsNightsSplit['Country1']?RoomsNightsSplit['Country1'].NbRoomNights:0;
            RoomNightsCountry2 = RoomsNightsSplit['Country2']?RoomsNightsSplit['Country2'].Country?RoomsNightsSplit['Country2'].Country:null:null;
            NbRoomNightsBookedCountry2 = RoomsNightsSplit['Country2']?RoomsNightsSplit['Country2'].NbRoomNights:0;
            RoomNightsCountry3 = RoomsNightsSplit['Country3']?RoomsNightsSplit['Country3'].Country?RoomsNightsSplit['Country3'].Country:null:null;
            NbRoomNightsBookedCountry3 = RoomsNightsSplit['Country3']?RoomsNightsSplit['Country3'].NbRoomNights:0;
            RoomNightsCountry4 = RoomsNightsSplit['Country4']?RoomsNightsSplit['Country4'].Country?RoomsNightsSplit['Country4'].Country:null:null;
            NbRoomNightsBookedCountry4 = RoomsNightsSplit['Country4']?RoomsNightsSplit['Country4'].NbRoomNights:0;
            RoomNightsCountry5 = RoomsNightsSplit['Country5']?RoomsNightsSplit['Country5'].Country?RoomsNightsSplit['Country5'].Country:null:null;
            NbRoomNightsBookedCountry5 = RoomsNightsSplit['Country5']?RoomsNightsSplit['Country5'].NbRoomNights:0;
        }
        console.log(RoomNightsCountry1);
        console.log(NbRoomNightsBookedCountry1);
        console.log(RoomNightsCountry2);
        console.log(NbRoomNightsBookedCountry2);
        
        var SplitByMonth = result.data['SplitByMonth'];
        var  NbRoomNightsBookedLastWeekApril = 0;
        var  NbRoomNightsBookedLastWeekMay = 0;
        var  NbRoomNightsBookedLastWeekJune = 0;
        var  NbRoomNightsBookedLastWeekJuly = 0;
        var  NbRoomNightsBookedLastWeekAugust = 0;
        var  NbRoomNightsBookedLastWeekSeptember =0;
        var  TotalNightsBookedLastWeek = 0;

        if (SplitByMonth) {
          NbRoomNightsBookedLastWeekApril = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M1?SplitByMonth['NbRoomsByMonth'].M1:0:0;
          NbRoomNightsBookedLastWeekMay = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M2?SplitByMonth['NbRoomsByMonth'].M2:0:0;
          NbRoomNightsBookedLastWeekJune = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M3?SplitByMonth['NbRoomsByMonth'].M3:0:0;
          NbRoomNightsBookedLastWeekJuly = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M4?SplitByMonth['NbRoomsByMonth'].M4:0:0;
          NbRoomNightsBookedLastWeekAugust = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M5?SplitByMonth['NbRoomsByMonth'].M5:0:0;
          NbRoomNightsBookedLastWeekSeptember = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M6?SplitByMonth['NbRoomsByMonth'].M6:0:0;
          TotalNightsBookedLastWeek = SplitByMonth['NbRoomsByMonth']?SplitByMonth['NbRoomsByMonth'].M7?SplitByMonth['NbRoomsByMonth'].M7:0:0;
        }
        console.log(NbRoomNightsBookedLastWeekApril);
        console.log(NbRoomNightsBookedLastWeekMay);

      
        //Page 3
        
        var TotalNumberRoomAvailable = result.data.TotalNumberRoomAvailable;

        var SplitTotalRoomAvailable = result.data['SplitTotalRoomAvailable'];
        var  NbOccupiedRoomNightsAvril= 0;
          var  NbOccupiedRoomNightsMay=  0;
          var  NbOccupiedRoomNightsJune=  0;
          var  NbOccupiedRoomNightsJuly=  0;
          var  NbOccupiedRoomNightsAugust=  0;
          var  NbOccupiedRoomNightsSeptember=  0;
          var  NbTotalRoomNightsAvril=  0;
          var  NbTotalRoomNightsMay=  0;
          var  NbTotalRoomNightsJune=  0;
          var  NbTotalRoomNightsJuly=  0;
          var  NbTotalRoomNightsAugust=  0;
          var  NbTotalRoomNightsSeptember=  0;
  
        if (SplitTotalRoomAvailable) {
          NbOccupiedRoomNightsAvril= SplitTotalRoomAvailable['NbOfOccupiedRooms']?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M1?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M1:0:0;
          NbOccupiedRoomNightsMay=  SplitTotalRoomAvailable['NbOfOccupiedRooms']?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M2?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M2:0:0;
          NbOccupiedRoomNightsJune=  SplitTotalRoomAvailable['NbOfOccupiedRooms']?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M3?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M3:0:0;
          NbOccupiedRoomNightsJuly=  SplitTotalRoomAvailable['NbOfOccupiedRooms']?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M4?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M4:0:0;
          NbOccupiedRoomNightsAugust=  SplitTotalRoomAvailable['NbOfOccupiedRooms']?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M5?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M5:0:0;
          NbOccupiedRoomNightsSeptember=  SplitTotalRoomAvailable['NbOfOccupiedRooms']?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M6?SplitTotalRoomAvailable['NbOfOccupiedRooms'].M6:0:0;
          NbTotalRoomNightsAvril=  SplitTotalRoomAvailable['TotalRoomNightAvailable']?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M1?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M1:0:0;
          NbTotalRoomNightsMay=  SplitTotalRoomAvailable['TotalRoomNightAvailable']?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M2?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M2:0:0;
          NbTotalRoomNightsJune=  SplitTotalRoomAvailable['TotalRoomNightAvailable']?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M3?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M3:0:0;
          NbTotalRoomNightsJuly=  SplitTotalRoomAvailable['TotalRoomNightAvailable']?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M4?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M4:0:0;
          NbTotalRoomNightsAugust=  SplitTotalRoomAvailable['TotalRoomNightAvailable']?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M5?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M5:0:0;
          NbTotalRoomNightsSeptember=  SplitTotalRoomAvailable['TotalRoomNightAvailable']?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M6?SplitTotalRoomAvailable['TotalRoomNightAvailable'].M6:0:0;
        }

        var SplitTotalRoomAvailable = result.data['SplitTotalRoomAvailable-total'];
        var OccupancyRateApril = 0;
        var OccupancyRateMay = 0;
        var OccupancyRateJune = 0;
        var OccupancyRateJuly = 0;
        var OccupancyRateAugust = 0;
        var OccupancyRateSeptember = 0;

        if (SplitTotalRoomAvailable) {

          OccupancyRateApril = SplitTotalRoomAvailable.M1?SplitTotalRoomAvailable.M1:0;
          OccupancyRateMay = SplitTotalRoomAvailable.M2?SplitTotalRoomAvailable.M2:0;
          OccupancyRateJune = SplitTotalRoomAvailable.M3?SplitTotalRoomAvailable.M3:0;
          OccupancyRateJuly = SplitTotalRoomAvailable.M4?SplitTotalRoomAvailable.M4:0;
          OccupancyRateAugust =SplitTotalRoomAvailable.M5?SplitTotalRoomAvailable.M5:0;
          OccupancyRateSeptember =SplitTotalRoomAvailable.M6?SplitTotalRoomAvailable.M6:0;

        }

        //
      var Result = result.data;
        

        try {
        
        const resultSurvey = await API.graphql(graphqlOperation(createSurvey, {input:{ IsHotelClosed, IsHotelContainmentZone, HotelContainmentEndDate, HotelReopeningDate, 
            NbBookings, NbRoomNightsBooked, NbRoomNightsCanceled,
            NbRoomNightsBookedFIT, NbRoomNightsBookedMICE, NbRoomNightsBookedCorporate, RemainingRoomNightsBySegment,
            RoomNightsCountry1, NbRoomNightsBookedCountry1, RoomNightsCountry2, NbRoomNightsBookedCountry2, RoomNightsCountry3, NbRoomNightsBookedCountry3,
            RoomNightsCountry4, NbRoomNightsBookedCountry4, RoomNightsCountry5, NbRoomNightsBookedCountry5, NbRoomNightsBookedLastWeekApril, NbRoomNightsBookedLastWeekMay,
            NbRoomNightsBookedLastWeekAugust, NbRoomNightsBookedLastWeekSeptember, TotalNightsBookedLastWeek, NbRoomNightsBookedLastWeekJune, NbRoomNightsBookedLastWeekJuly,
            TotalNumberRoomAvailable, NbOccupiedRoomNightsAvril,NbOccupiedRoomNightsAugust, NbOccupiedRoomNightsJuly, NbOccupiedRoomNightsJune, NbOccupiedRoomNightsMay,
            NbOccupiedRoomNightsSeptember,NbTotalRoomNightsAugust, NbTotalRoomNightsAvril, NbTotalRoomNightsJuly, NbTotalRoomNightsJune, NbTotalRoomNightsMay, NbTotalRoomNightsSeptember, 
          OccupancyRateApril, OccupancyRateAugust, OccupancyRateJuly, OccupancyRateJune, OccupancyRateMay, OccupancyRateSeptember, Week, Result, HotelLocation
          } }));

          console.log(resultSurvey);
          
          if (NbRoomNightsBookedCountry1>0) {
            await API.graphql(graphqlOperation(createClientCountry, {input:{'Country':RoomNightsCountry1, 'NumberOfClientBookings':NbRoomNightsBookedCountry1, Week }}));
          }
          if (NbRoomNightsBookedCountry2>0) {
            await API.graphql(graphqlOperation(createClientCountry, {input:{'Country':RoomNightsCountry2, 'NumberOfClientBookings':NbRoomNightsBookedCountry2, Week }}));
          }
          if (NbRoomNightsBookedCountry3>0) {
            await API.graphql(graphqlOperation(createClientCountry, {input:{'Country':RoomNightsCountry3, 'NumberOfClientBookings':NbRoomNightsBookedCountry3, Week }}));
          }
          if (NbRoomNightsBookedCountry4>0) {
            await API.graphql(graphqlOperation(createClientCountry, {input:{'Country':RoomNightsCountry4, 'NumberOfClientBookings':NbRoomNightsBookedCountry4, Week }}));
          }
          if (NbRoomNightsBookedCountry5>0) {
            await API.graphql(graphqlOperation(createClientCountry, {input:{'Country':RoomNightsCountry5, 'NumberOfClientBookings':NbRoomNightsBookedCountry5, Week }}));
          }

          await API.graphql(graphqlOperation(createTracking, {input:{'Email':this.props.userAttributes.email, 'Sub':this.props.userAttributes.sub, Week }}));
          
          this.setState({ isCompleted: true});
          history.push('/Final');
        } catch(err){
          console.log('Error Saving data', err);
          history.push('/Error');
        }
      } else {
        history.push('/FinalRetry');
      }


     
    } catch (err) {
      console.error("error during delete", err);
    }
  }

  render() {


   
    var json = (this.props.hotelLocation === "")? firstSurvey : finalSurvey;
    

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        //data={data}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;

    
    /*var onCompleteComponent = this.state.isCompleted ? (
    ) : null;*/

    return (
      <div>
        {surveyRender}
      </div>
    );
  }
}

export default SurveyComponent;
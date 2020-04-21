/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
      id
      IsHotelClosed
      HotelReopeningDate
      IsHotelContainmentZone
      HotelContainmentEndDate
      NbBookings
      NbRoomNightsCanceled
      NbRoomNightsBooked
      HotelLocation
      NbRoomNightsBookedFIT
      NbRoomNightsBookedMICE
      NbRoomNightsBookedCorporate
      RemainingRoomNightsBySegment
      RoomNightsCountry1
      NbRoomNightsBookedCountry1
      RoomNightsCountry2
      NbRoomNightsBookedCountry2
      RoomNightsCountry3
      NbRoomNightsBookedCountry3
      RoomNightsCountry4
      NbRoomNightsBookedCountry4
      RoomNightsCountry5
      NbRoomNightsBookedCountry5
      NbRoomNightsBookedLastWeekApril
      NbRoomNightsBookedLastWeekMay
      NbRoomNightsBookedLastWeekJune
      NbRoomNightsBookedLastWeekJuly
      NbRoomNightsBookedLastWeekAugust
      NbRoomNightsBookedLastWeekSeptember
      TotalNightsBookedLastWeek
      TotalNumberRoomAvailable
      NbOccupiedRoomNightsAvril
      NbOccupiedRoomNightsMay
      NbOccupiedRoomNightsJune
      NbOccupiedRoomNightsJuly
      NbOccupiedRoomNightsAugust
      NbOccupiedRoomNightsSeptember
      NbTotalRoomNightsAvril
      NbTotalRoomNightsMay
      NbTotalRoomNightsJune
      NbTotalRoomNightsJuly
      NbTotalRoomNightsAugust
      NbTotalRoomNightsSeptember
      OccupancyRateApril
      OccupancyRateMay
      OccupancyRateJune
      OccupancyRateJuly
      OccupancyRateAugust
      OccupancyRateSeptember
      Sub
      Result
      Week
    }
  }
`;
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        IsHotelClosed
        HotelReopeningDate
        IsHotelContainmentZone
        HotelContainmentEndDate
        NbBookings
        NbRoomNightsCanceled
        NbRoomNightsBooked
        HotelLocation
        NbRoomNightsBookedFIT
        NbRoomNightsBookedMICE
        NbRoomNightsBookedCorporate
        RemainingRoomNightsBySegment
        RoomNightsCountry1
        NbRoomNightsBookedCountry1
        RoomNightsCountry2
        NbRoomNightsBookedCountry2
        RoomNightsCountry3
        NbRoomNightsBookedCountry3
        RoomNightsCountry4
        NbRoomNightsBookedCountry4
        RoomNightsCountry5
        NbRoomNightsBookedCountry5
        NbRoomNightsBookedLastWeekApril
        NbRoomNightsBookedLastWeekMay
        NbRoomNightsBookedLastWeekJune
        NbRoomNightsBookedLastWeekJuly
        NbRoomNightsBookedLastWeekAugust
        NbRoomNightsBookedLastWeekSeptember
        TotalNightsBookedLastWeek
        TotalNumberRoomAvailable
        NbOccupiedRoomNightsAvril
        NbOccupiedRoomNightsMay
        NbOccupiedRoomNightsJune
        NbOccupiedRoomNightsJuly
        NbOccupiedRoomNightsAugust
        NbOccupiedRoomNightsSeptember
        NbTotalRoomNightsAvril
        NbTotalRoomNightsMay
        NbTotalRoomNightsJune
        NbTotalRoomNightsJuly
        NbTotalRoomNightsAugust
        NbTotalRoomNightsSeptember
        OccupancyRateApril
        OccupancyRateMay
        OccupancyRateJune
        OccupancyRateJuly
        OccupancyRateAugust
        OccupancyRateSeptember
        Sub
        Result
        Week
      }
      nextToken
    }
  }
`;
export const getTracking = /* GraphQL */ `
  query GetTracking($id: ID!) {
    getTracking(id: $id) {
      id
      Email
      Sub
      Week
    }
  }
`;
export const listTrackings = /* GraphQL */ `
  query ListTrackings(
    $filter: ModelTrackingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrackings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Email
        Sub
        Week
      }
      nextToken
    }
  }
`;
export const getFirstLogin = /* GraphQL */ `
  query GetFirstLogin($id: ID!) {
    getFirstLogin(id: $id) {
      id
      Email
      Sub
      LocationHotel
    }
  }
`;
export const listFirstLogins = /* GraphQL */ `
  query ListFirstLogins(
    $filter: ModelFirstLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFirstLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Email
        Sub
        LocationHotel
      }
      nextToken
    }
  }
`;
export const getClientCountry = /* GraphQL */ `
  query GetClientCountry($id: ID!) {
    getClientCountry(id: $id) {
      id
      Country
      NumberOfClientBookings
      Week
    }
  }
`;
export const listClientCountrys = /* GraphQL */ `
  query ListClientCountrys(
    $filter: ModelClientCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientCountrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Country
        NumberOfClientBookings
        Week
      }
      nextToken
    }
  }
`;

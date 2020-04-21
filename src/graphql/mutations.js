/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
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
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
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
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
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
export const createTracking = /* GraphQL */ `
  mutation CreateTracking(
    $input: CreateTrackingInput!
    $condition: ModelTrackingConditionInput
  ) {
    createTracking(input: $input, condition: $condition) {
      id
      Email
      Sub
      Week
    }
  }
`;
export const updateTracking = /* GraphQL */ `
  mutation UpdateTracking(
    $input: UpdateTrackingInput!
    $condition: ModelTrackingConditionInput
  ) {
    updateTracking(input: $input, condition: $condition) {
      id
      Email
      Sub
      Week
    }
  }
`;
export const deleteTracking = /* GraphQL */ `
  mutation DeleteTracking(
    $input: DeleteTrackingInput!
    $condition: ModelTrackingConditionInput
  ) {
    deleteTracking(input: $input, condition: $condition) {
      id
      Email
      Sub
      Week
    }
  }
`;
export const createFirstLogin = /* GraphQL */ `
  mutation CreateFirstLogin(
    $input: CreateFirstLoginInput!
    $condition: ModelFirstLoginConditionInput
  ) {
    createFirstLogin(input: $input, condition: $condition) {
      id
      Email
      Sub
      LocationHotel
    }
  }
`;
export const updateFirstLogin = /* GraphQL */ `
  mutation UpdateFirstLogin(
    $input: UpdateFirstLoginInput!
    $condition: ModelFirstLoginConditionInput
  ) {
    updateFirstLogin(input: $input, condition: $condition) {
      id
      Email
      Sub
      LocationHotel
    }
  }
`;
export const deleteFirstLogin = /* GraphQL */ `
  mutation DeleteFirstLogin(
    $input: DeleteFirstLoginInput!
    $condition: ModelFirstLoginConditionInput
  ) {
    deleteFirstLogin(input: $input, condition: $condition) {
      id
      Email
      Sub
      LocationHotel
    }
  }
`;
export const createClientCountry = /* GraphQL */ `
  mutation CreateClientCountry(
    $input: CreateClientCountryInput!
    $condition: ModelClientCountryConditionInput
  ) {
    createClientCountry(input: $input, condition: $condition) {
      id
      Country
      NumberOfClientBookings
      Week
    }
  }
`;
export const updateClientCountry = /* GraphQL */ `
  mutation UpdateClientCountry(
    $input: UpdateClientCountryInput!
    $condition: ModelClientCountryConditionInput
  ) {
    updateClientCountry(input: $input, condition: $condition) {
      id
      Country
      NumberOfClientBookings
      Week
    }
  }
`;
export const deleteClientCountry = /* GraphQL */ `
  mutation DeleteClientCountry(
    $input: DeleteClientCountryInput!
    $condition: ModelClientCountryConditionInput
  ) {
    deleteClientCountry(input: $input, condition: $condition) {
      id
      Country
      NumberOfClientBookings
      Week
    }
  }
`;

export const REQUEST_PERSON_DETAILS = "REQUEST_PERSON_DETAILS";
export const RECEIVE_PERSON_DETAILS = "RECEIVE_PERSON_DETAILS";
export const GET_FACILITY_DETAILS = "GET_FACILITY_DETAILS";
export const GET_EXPOSURE_DETAILS = "GET_EXPOSURE_DETAILS";

export const requestPersonDetails = person => {
  return {
    type: REQUEST_PERSON_DETAILS,
    person
  };
};

export const receivePersonDetails = person => {
  return {
    type: RECEIVE_PERSON_DETAILS,
    person
  };
};

const getFacilityDetails = facility => {
  return {
    type: GET_FACILITY_DETAILS,
    facility
  };
};

const getExposureDetails = exposure => {
  return {
    type: GET_EXPOSURE_DETAILS,
    exposure
  };
};

const fetchPersonDetails = person => {
  return fetch(`api/person/${person}`);
};

const fetchFacilityDetails = facility => {
  return fetch(`api/facility/${facility}`);
};

const fetchExposureDetails = exposure => {
  return fetch(`api/person/${exposure}`);
};

export const calculateExposure = person => {
  return dispatch => {
    dispatch(requestPersonDetails(person));

    return fetchPersonDetails()
      .then(response => response.json())
      .then(json => dispatch(getFacilityDetails(json.val1, json)));
  };
};

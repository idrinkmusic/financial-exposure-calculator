export const GET_PERSON_DETAILS = "GET_PERSON_DETAILS";
export const GET_FACILITY_DETAILS = "GET_FACILITY_DETAILS";
export const GET_EXPOSURE_DETAILS = "GET_EXPOSURE_DETAILS";

const getPersonDetails = person => {
  return {
    type: GET_PERSON_DETAILS,
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
  return fetch(`api/person/${person}`);
};

const calculateExposure = person => {
  return dispatch => {
    dispatch(getPersonDetails(person));

    return fetch(`api/person/${person}`)
      .then(response => response.json())
      .then(json => dispatch(getFacilityDetails(facility, json)));
  };
};

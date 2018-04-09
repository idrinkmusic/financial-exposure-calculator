export const REQUEST_PERSON_DETAILS = "REQUEST_PERSON_DETAILS";
export const RECEIVE_PERSON_DETAILS = "RECEIVE_PERSON_DETAILS";
export const REQUEST_FACILITY_DETAILS = "REQUEST_FACILITY_DETAILS";
export const RECEIVE_FACILITY_DETAILS = "RECEIVE_FACILITY_DETAILS";
export const REQUEST_EXPOSURE_DETAILS = "REQUEST_EXPOSURE_DETAILS";
export const RECEIVE_EXPOSURE_DETAILS = "RECEIVE_EXPOSURE_DETAILS";

const requestPersonDetails = personId => {
  return {
    type: REQUEST_PERSON_DETAILS,
    personId
  };
};

const receivePersonDetails = person => {
  return {
    type: RECEIVE_PERSON_DETAILS,
    person
  };
};

const requestFacilityDetails = facility => {
  return {
    type: REQUEST_FACILITY_DETAILS,
    facility
  };
};

const receiveFacilityDetails = facility => {
  return {
    type: RECEIVE_FACILITY_DETAILS,
    facility
  };
};

const requestExposureDetails = exposure => {
  return {
    type: REQUEST_EXPOSURE_DETAILS,
    exposure
  };
};

const receiveExposureDetails = exposure => {
  return {
    type: RECEIVE_EXPOSURE_DETAILS,
    exposure
  };
};

const fetchPersonDetails = person => {
  return fetch(`/api/person/${person}`);
};

const fetchFacilityDetails = facility => {
  return fetch(`api/facility/${facility}`);
};

const fetchExposureDetails = exposure => {
  return fetch(`api/exposure/${exposure}`);
};

export const fetchDetails = person => {
  return dispatch => {
    dispatch(requestPersonDetails(person));

    return fetchPersonDetails(person)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePersonDetails(json));

        dispatch(requestFacilityDetails(json.val1));

        fetchFacilityDetails(json.val1)
          .then(response => response.json())
          .then(json2 => {
            dispatch(receiveFacilityDetails(json2));

            dispatch(requestExposureDetails(json.val2));

            fetchExposureDetails(json.val2)
              .then(response => response.json())
              .then(json3 => {
                dispatch(receiveExposureDetails(json3));
              });
          });
      });
  };
};

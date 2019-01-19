// SurveyFormReview shows user their form inputs for review.
import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} style={{ marginBottom: "30px", marginTop: "10px" }}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5 style={{ marginBottom: "20px" }}>
        Please confirm your entries before proceeding:
      </h5>
      {reviewFields}
      <button
        className="yellow darken-4 white-text btn-flat"
        onClick={onCancel}
      >
        Back
        <i className="material-icons left">navigate_before</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));

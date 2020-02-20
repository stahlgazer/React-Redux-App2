import React from "react";
import { connect } from "react-redux";
import { fetchCat } from "../actions";

function CatFact(props) {
  console.log(props, "catfact props");
  return (
    <div className="main-container">
      <div className="button-container">
        {/* fetchCat action onClick */}
        <button onClick={() => props.fetchCat()}>Get Random Cat Fact</button>
        {/* If no cat data and not loading, display message */}
        {!props.cat && !props.isLoading && (
          <h2>Let's Browse Some Awesome Cat Facts!</h2>
        )}
      </div>
      {/* If loading, display loading message */}
      {props.isLoading && <p>Loading New Cat Fact!</p>}
      {/* If cat data exists and not loading, display cat fact */}
      {props.cat && !props.isLoading && <p>{props.cat.text}</p>}
    </div>
  );
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    cat: state.cat,
    error: state.error
  };
};

// CONNECT CATFACT COMPONENT TO STORE AND fetchCat ACTION
export default connect(mapStateToProps, { fetchCat })(CatFact);

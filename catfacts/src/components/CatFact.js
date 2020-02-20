import React from "react";
import { connect } from "react-redux";
import { fetchCat } from "../actions";

function CatFact(props) {
  console.log(props, "catfact props");
  return (
    <div className="main-container">
      <div className="button-container">
        <button onClick={() => props.fetchCat()}>Get Random Cat Fact</button>
        {!props.cat && !props.isLoading && (
          <h2>Let's Browse Some Awesome Cat Facts!</h2>
        )}
      </div>
      {props.isLoading && <p>Loading New Cat Fact!</p>}
      {props.cat && !props.isLoading && <p>{props.cat.text}</p>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    cat: state.cat,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchCat })(CatFact);

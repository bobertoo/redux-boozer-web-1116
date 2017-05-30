import React from 'react';
import {connect} from 'react-redux';

function CocktailsShow(props){
  return (
    <div>
      <h1>{props.cocktail.name}</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cocktail: state.cocktail
  }
}

export default connect(mapStateToProps)(CocktailsShow);

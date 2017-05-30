import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCocktails, selectCocktail} from '../actions';

class CocktailsIndex extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchCocktails();
  }

  handleClick(cocktail) {
    this.props.selectCocktail({
      id: cocktail.id,
      name: cocktail.name
    });
  }

  render() {
    const cocktailList = this.props.cocktails.map(
      cocktail =>
        <li className='list-group-item' key={cocktail.id} onClick={() => this.handleClick(cocktail)}>
          {cocktail.name}
        </li>
    );
    return (
      <div>
        <ul className='list-group'>
          {cocktailList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
    cocktail: state.cocktail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCocktails,
    selectCocktail
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex);

import React, { Component } from 'react';
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';

class App extends Component {
  
  componentDidMount(){
    this.props.fetchCats()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList cats={this.props.cats} />
    }
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {
          this.handleLoading()
          }
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
    return {
      fetchCats: () => dispatch(fetchCats()),
      addCats: (cats) => dispatch({type: "ADD_CATS", payload: cats})
    }
};

const mapStateToProps = state => {
  return {
    cats: state.cats,
    loading: state.loading
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


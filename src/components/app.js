import React from 'react';
import {connect} from 'react-redux';
import CardList from './../containers/cards-list';
import {fetchArtworks} from '../actions';

class App extends React.Component {
    componentWillMount(){
        this.props.fetchArtworks();
    }
    render(){
        return (
            <CardList />
        );
    }
}

export default connect(null,{fetchArtworks})(App);

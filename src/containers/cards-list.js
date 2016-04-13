/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardListItem from './card-list-item';

function mapStateToProps(state) {
    return {
        cards: state.cards
    };
}

class CardList extends Component {
    render(){
        const cards = this.props.cards.artworks.map((artwork)=>{
           return (
               <CardListItem key={artwork.inventory_id} card={artwork} />
           );
        });
        return (
            <ul className="cards-list">
                {cards}
            </ul>
        );
    }
}

export default connect(mapStateToProps, null)(CardList);
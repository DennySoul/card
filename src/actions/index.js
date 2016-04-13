'use strict';

import axios from 'axios';

const dummyData = {
    artworks: [{
        title: 'Untitled (Sumner, Missisippi)',
        inventory_id: '12345678E',
        status: 'Available',
        price: 33333,
        thumbnail_url: 'http://placekitten.com/g/300/200',
        currency: 'USD',
        artist: {
            first_name: 'William',
            last_name: 'Eggleston'
        }
    }]
};

export function fetchArtworks() {
    //const request = axios.get('/artworks');
    return {
        type: 'FETCH_ARTWORKS',
        //payload: request
        payload: dummyData
    }
}

export function saveCard(card) {
    /*const request = axios.post('/artworks',{
        title: card.title,
        id: card.id
    });*/

    return {
        type: 'SAVE_CARD',
        //payload: request
        payload: card
    }
}


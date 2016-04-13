/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';
import types from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case types.cards.FETCH_ARTWORKS:
            return Object.assign({}, state, action.payload);
        case types.cards.SAVE_CARD:
            let artworks = state.artworks,
                originalElement = artworks.find((artwork)=>artwork.inventory_id === action.payload.inventory_id),
                ind = artworks.indexOf(originalElement);

            return Object.assign(
                {},
                state,
                {
                    artworks: [
                        ...artworks.slice(0, ind),
                        Object.assign({}, originalElement, action.payload),
                        ...artworks.slice(ind + 1)
                    ]
                }
            );
        default:
            return state;
    }
}
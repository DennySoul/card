/**
 * Created by dchernyh on 13.04.16.
 */
/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';
import {expect} from '../test_helper';
import types from '../../src/actions/types';
import reducer from '../../src/reducers/card-reducer';

describe('Card buttons in view mode', () => {
    let artworks, action;
    beforeEach(()=>{
        artworks = {
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
    });

    it('handles action with unknown type',()=>{
        expect(reducer(undefined,{})).to.be.instanceOf(Object);
        expect(reducer(undefined, {})).to.eql({});
    });

    it('handles action type with type FETCH_ARTWORKS',()=>{
        const action = {
            type: types.cards.FETCH_ARTWORKS,
            payload: artworks
        };

        expect(reducer({},action)).to.be.instanceOf(Object);
        expect(reducer({},action)).to.eql(artworks);
    });

    it('handles action with type of SAVE_CARD',()=>{
        const action = {
            type: types.cards.SAVE_CARD,
            payload: {
                inventory_id: '12345678E',
                title: 'New Title'
            }
        };

        let updatedCard = {
            artworks: [{
                title: 'New Title',
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

        expect(reducer(artworks,action)).to.be.instanceOf(Object);
        expect(reducer(artworks,action)).to.be.eql(updatedCard);
    });

});

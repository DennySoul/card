/**
 * Created by dchernyh on 13.04.16.
 */
/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';
import {renderComponent, expect} from '../test_helper';
import CardList from '../../src/containers/cards-list';

describe('Cards list', () => {
    let component;

    beforeEach(() => {
        const state = {
            cards: {
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
            }
        };

        component = renderComponent(CardList, null, state);
    });

    it('shows the list component', () => {
        expect(component.find('ul')).to.exist;
    });
});

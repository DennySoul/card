/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';
import {renderComponent, expect} from '../test_helper';
import CardInfo from '../../src/components/card-info';

describe('Card buttons in view mode', () => {
    let component;

    beforeEach(() => {
        const props = {
            card: {
                title: 'Untitled (Sumner, Missisippi)',
                inventory_id: '12345678E',
                status: 'Available',
                price: 33333,
                thumbnail_url: 'http://placekitten.com/g/300/200',
                currency: 'USD',
                artist: {
                    first_name: 'First Name',
                    last_name: 'Last Name'
                }
            },
            artist: {
                first_name: 'First Name',
                last_name: 'Last Name'
            }
        };
        component = renderComponent(CardInfo, props);
    });

    it('shows the list with info', () => {
        expect(component.find('ul')).to.exist;
    });

    it('shows each card info', () => {
        expect(component.find('li').length).to.equal(4);
    });

    it('shows each info that is provided',()=>{
        expect(component.find('li')).to.contain('First Name Last Name');
        expect(component.find('li')).to.contain('#ID 12345678E');
        expect(component.find('li')).to.contain('Available');
        expect(component.find('li')).to.contain('$ 33333.00');
    });
});

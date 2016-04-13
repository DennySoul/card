/**
 * Created by dchernyh on 13.04.16.
 */
import {renderComponent, expect} from '../test_helper';
import CardListItem from '../../src/containers/card-list-item';

describe('One card', ()=> {
    const cards = {
        card : {
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
        }
    };

    let component;


    beforeEach(()=> {
        component = renderComponent(CardListItem, cards, {});
    });

    it('has correct view in view mode',()=>{
        component.simulate('mouseEnter');
        expect(component.find('.card-component-container')).to.exist;
        expect(component.find('.card-component-container > img')).to.exist;
        expect(component.find('.card-component-container > header > h5 > span')).to.exist;
        expect(component.find('.card-component-container > .card-buttons-edit')).to.exist;
    });
});
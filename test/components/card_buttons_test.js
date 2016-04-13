/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';
import {renderComponent, expect} from '../test_helper';
import CardButtons from '../../src/components/card-buttons';

describe('Card buttons in view mode', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CardButtons);
    });

    it('shows each button', () => {
        expect(component.find('button').length).to.equal(3);
    });

    it('shows view button', () => {
        expect(component.find('.card-button-view')).to.exist;
    });

    it('shows edit button', () => {
        expect(component.find('.card-button-edit')).to.exist;
    });

    it('shows select button', () => {
        expect(component.find('.card-button-select')).to.exist;
    });
});

/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';

import {renderElement, expect} from '../test_helper';
import {saveCard} from '../../src/actions';
import types from '../../src/actions/types';

describe('actions',()=>{
    describe('save card',()=>{
        let action,
            card = {
                inventory_id: '12345678E',
                title: 'Card Title'
            };

        beforeEach(()=>{
            action = saveCard(card)
        });

        it('has correct action type',()=>{
            expect(action.type).to.equal(types.cards.SAVE_CARD);
        });

        it('has correct payload',()=>{
            expect(action.payload).to.equal(card)
        });
    });
});

import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

describe('App Component', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('shows the card container', () => {
        expect(component.find('.card-component-container')).to.exist;
    });

    it('shows the image', () => {
        expect(component.find('.card-image')).to.exist;
    });

    it('shows the header of component', () => {
        expect(component.find('.card-header')).to.exist;
    });

    it('shows the card info', () => {
        expect(component.find('.card-info')).to.exist;
    });
});

import actions from '../../actions/';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
    
    const payload = ProductMock;
        test('AddToCart Action', () => {
        const expected = {
            type: "ADD_TO_CART",
            payload
        };
        expect(actions.addToCart(payload)).toEqual(expected);
    });
    test('DeleteCard Action ', () => {
        const expected = {
            type: "REMOVE_FROM_CART",
            payload
        };
        expect(actions.removeFromCart(payload)).toEqual(expected);
    });
});
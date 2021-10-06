jest.mock('./list')
const List  = require('./list');

describe('Tests for List add function', () => {

    test('checks if a new item is being saved',() => {
        const array = List.dataArray();
        array = List.saveItem('test'));
        expect(array[0].text).toBe('test');
    });
});

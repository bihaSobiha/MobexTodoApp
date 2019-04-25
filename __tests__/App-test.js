// import 'react-native';
// import React from 'react';
// import App from '../App';

// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//     renderer.create(<App />);
// });

// describe('App', () => {
// describe('when the button is clicked', () => {
//     const spy = jest.spyOn(App.prototype, 'getData');

//     const app = shallow(<App />);

//     const mockData = { bpi: { USD: { rate_float: 5 } } };

//     beforeEach(async() => {
//         const mock = new MockAdapter(axios);
//         mock
//             .onGet("https://api.coindesk.com/v1/bpi/currentprice.json")
//             .reply(200, mockData);
//         await app.find('Button').first().props().onPress();
//     });

//     it('calls the `getData` function', () => {
//          expect(spy).toHaveBeenCalled();
//     });

//     it('sets the `state.rate` to the bitcoin exchange rate that we    get from the GET request', async() => {
//         await expect(app.state().rate).toEqual(mockData.bpi.USD.rate_float);
//     });
// });
// });

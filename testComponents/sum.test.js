import 'react-native';
import React from 'react';
import Sum from './sum';
import renderer from 'react-test-renderer';

test('Main SnapShot', () => {
    const snap = renderer.create(
        <Sum />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});
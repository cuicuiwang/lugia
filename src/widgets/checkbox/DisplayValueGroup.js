import React from 'react';
import {CheckBox} from '@lugia/lugia-web';

const CheckBoxGroup = CheckBox.Group;
const options = [
    { label: 'check1', value: '11', name: '1' },
    { label: 'check2', value: '22', name: '2' },
    { label: 'check3', value: '33', name: '3' },
];

export default class CheckBoxDemo extends React.Component {

    render() {
        return (
            <div>
                <CheckBoxGroup
                    data={options}
                    childType={'button'}
                    defaultValue={['11', '44']}
                    defaultDisplayValue={['check4', 'check5']}
                    displayField="label"
                />
            </div>
        )
    }
}
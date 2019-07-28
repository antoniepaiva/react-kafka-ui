import React, { Component } from 'react'
import DropDown from 'react-dropdown'
import 'react-dropdown/style.css'

export class SelectOption extends Component {

    constructor(props) {

        super(props);
        this.state = {
            selectedOption: ''
        }
    }

        render(){
            const options = ['Topic1', 'Topic2'];
            return (
        <div>
                <h1>Welcome to Kafka Monitoring Application</h1>
                <DropDown options={options} placeholder="Select an Option" />

        </div >
            )

    }
}






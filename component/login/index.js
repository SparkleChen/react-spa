import React,{ Component,createElement } from 'react';
import { LinkTo } from '../LinkTo.js';



export default class Login extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div>
                <LinkTo/>
                <div>login</div>  
            </div>
        )
    }
}

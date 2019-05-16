import React,{ Component } from 'react';
import { LinkTo } from '../LinkTo.js';

export default class Login extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <>
            <LinkTo/>
            <div>Login</div>
            </>
        )
    }
}
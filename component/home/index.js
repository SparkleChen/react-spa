import React,{ Component } from 'react';
import { LinkTo } from '../LinkTo.js';
import { get } from '../../lib/request.js';

export default class Home extends Component {
    constructor () {
        super()
    }
    componentDidMount () {
        get('/api/movie/top250').then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    render () {
        return (
            <div>
                <LinkTo/>
                <div>home</div>  
            </div>
        )
    }
}
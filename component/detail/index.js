import React,{ Component } from 'react';
import { LinkTo } from '../LinkTo.js';

export default class Detail extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
          <Repeat num={10}>
            {
              (index) => <div key={index}>{index}</div>
            }
          </Repeat>
        )
    }
}

function Repeat (props) {
   let item = [];
   for(let i=0;i<props.num;i++){
      item.push(props.children(i));
   }
   return (
     <>
       <LinkTo/>
       <div>{item}</div>
     </>
   )
}
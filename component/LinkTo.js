import React,{ Component } from 'react';
import { Link } from "react-router-dom";

export function LinkTo (props) {
    return (
      <>
        <div>
          <Link to='/'>go home</Link>
        </div>
        <div>
          <Link to='/detail'>go detail</Link>
        </div>
        <div>
          <Link to='/login'>go login</Link>
        </div>
      </>
    )
}
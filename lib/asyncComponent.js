import React, { Component } from 'react'

export const getAsyncComponent = load => {
    return  class asyncComponent extends Component {
        constructor () {
            super()
            this.state = {
                MyComponent:null
            }
        }
        componentDidMount () {
            load().then(({default:MyComponent}) => {
                this.setState({
                    MyComponent
                });
            })
        }
        render () {
            const { MyComponent } = this.state; 
            return (
                MyComponent ? <MyComponent/> : null
            )
        }
    }
}

import React, { Component } from 'react'

export  class ClassFunctionExamples extends Component {
    render() {
      return (
          <div>
              <Fun name="Function Component"></Fun>
              <Cls name1="Class Component"></Cls>
          </div>
          
      )
    }
  }
  
  export function Fun(props) { 
      return (
          <h2>Welcome to {props.name }</h2>
      );
  }
  
  export class Cls extends Component { 
      render(props) { 
          return (
              <h2>Welcom to { this.props.name1}</h2>
          );
      }
  }
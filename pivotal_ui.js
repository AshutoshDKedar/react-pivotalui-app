import React, { Component } from 'react';
import {DefaultButton} from 'pivotal-ui/react/buttons';

class PivotalUI extends Component{
  render(){
    return(
      <DefaultButton /*flat="true"*/ fullWidth="true" small>Click Me</DefaultButton>
    )
  }
}

export default PivotalUI;
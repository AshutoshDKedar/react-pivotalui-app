import React, { Component } from 'react';
import {Icon} from 'pivotal-ui/react/iconography';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';

class PivotalUI extends Component{
  render(){
    return(
      <React.Fragment>
        <DefaultButton /*flat="true"*/ fullWidth="true" small>}>Click Me</DefaultButton>
        <PrimaryButton /*flat="true"*/ fullWidth="true" small>Click Me</PrimaryButton>
        <DangerButton /*flat="true"*/ fullWidth="true" small>Click Me</DangerButton>
        <Icon src="react"/>
        <BrandButton /*flat="true"*/ fullWidth="true" small>Click Me</BrandButton>    
      </React.Fragment>
    );
  }
}

export default PivotalUI;
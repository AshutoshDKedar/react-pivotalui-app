import React, { Component } from 'react';
import {ThemeProvider} from 'pivotal-ui/react/theme-context';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Icon} from 'pivotal-ui/react/iconography';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';

class PivotalUI extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="bg-dark-gray pal">
          <ThemeProvider theme="dark">
            <DefaultButton /*flat="true"*/ fullWidth="true" small icon={<Icon src="add"/>}>Click Me</DefaultButton>
            <PrimaryButton href="" /*flat="true"*/ fullWidth="true" small>Click Me</PrimaryButton>
            <DangerButton /*flat="true"*/ fullWidth="true" small>Click Me</DangerButton>
            <BrandButton /*flat="true"*/ fullWidth="true" small>Click Me</BrandButton>   
          </ThemeProvider> 
        </div>
      </React.Fragment>
    );
  }
}

export default PivotalUI;
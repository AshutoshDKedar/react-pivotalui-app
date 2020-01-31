import React, { Component } from 'react';
import {ThemeProvider} from 'pivotal-ui/react/theme-context';
/*import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';*/
import 'pivotal-ui/css/flex-grids'
import {Icon} from 'pivotal-ui/react/iconography';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';

class PivotalUI extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="bg-dark-gray pal">
          <ThemeProvider theme="light">
            <div>
              <div className="grid grid-nogutter grid-show">
                <div className="col">
                  <DefaultButton /*flat="true" fullWidth="true"*/ small icon={<Icon src="add"/>}>Click Me</DefaultButton>
                </div>
                <div className="col">
                  <PrimaryButton href="" /*flat="true" fullWidth="true"*/ small>Click Me</PrimaryButton>
                </div>
                <div className="col">
                  <DangerButton /*flat="true" fullWidth="true"*/ small>Click Me</DangerButton>
                </div>
                <div className="col">
                  <BrandButton /*flat="true" fullWidth="true"*/ small>Click Me</BrandButton>   
                </div>
              </div>
            </div>
          </ThemeProvider> 
        </div>
      </React.Fragment>
    );
  }
}

export default PivotalUI;
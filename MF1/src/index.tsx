import * as React from 'react';
import { PiletApi } from 'my-app';
import './App.css';
import  {MF1Page} from './MF1Page'
import { LinkToMF1}  from './LinkToMF1';


export function setup(app: PiletApi) {
  const value = app.getData('MF2Data');
  console.log(`The value is: "${value}"!`)
  app.registerPage('/MF1Page', MF1Page);
  app.registerMenu('/LinkToMF1', LinkToMF1)
}



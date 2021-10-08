import * as React from 'react';
import { PiletApi } from 'my-app';
import './App.css';
import { MF2Page } from './MF2Page'
import { LinkToMF2 } from './LinkToMF2';
import * as ReactDom from 'react-dom'



export function setup(app: PiletApi) {
  app.registerPage('/MF2Page', MF2Page);
  app.registerMenu('/LinkToMF2', LinkToMF2);
  app.setData('MF2Data', 32);
  const value = app.getData('MF2Data');
  console.log(`THe value is:'${value}' `)
}



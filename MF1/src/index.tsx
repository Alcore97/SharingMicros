import * as React from 'react';
import { PiletApi } from 'my-app';
import './App.css';
import { MF1Page } from './MF1Page'
import { LinkToMF1}  from './LinkToMF1';
import * as ReactDom from 'react-dom'



export function setup(app: PiletApi) {

  app.registerPage('/MF1Page', MF1Page);
  app.registerMenu('/LinkToMF1', LinkToMF1)
}



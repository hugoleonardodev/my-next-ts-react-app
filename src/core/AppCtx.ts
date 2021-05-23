import * as React from 'react';

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

export const AppCtx = React.createContext<AppContextInterface | null>(null);

// Provider in your app

// const sampleAppContext: AppContextInterface = {
//   name: 'Using React Context in a Typescript App',
//   author: 'thehappybug',
//   url: 'http://www.example.com'
// };

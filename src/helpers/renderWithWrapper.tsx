import React, { FC, ReactElement } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

import { render, RenderOptions } from '@testing-library/react';
// import { AppCtx } from '../core/AppCtx'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppCtx = React.createContext<AppContextInterface | null>(null);

// Provider in your app

const sampleAppContext: AppContextInterface = {
  name: 'Using React Context in a Typescript App',
  author: 'thehappybug',
  url: 'http://www.example.com'
};

const AllTheProviders: FC = ({ children }) => {
  return (
    <AppCtx.Provider value={sampleAppContext}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </AppCtx.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

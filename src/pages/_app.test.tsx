import * as React from 'react';
import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppProps } from 'next/app';

import userEvent from '@testing-library/user-event';
import MyApp from './_app';
import Home from './index';

import { render } from '../helpers/renderWithWrapper';
import { NextComponentType, NextPageContext } from 'next';

const userA = navigator.userAgent;

type MockedProps = {
  message: string;
};

const MockedComponent: NextComponentType = ({ message }: MockedProps) => {
  return <Home message={message} />;
};

test('index.tsx', async () => {
  render(
    <MyApp
      pageProps={userA}
      Component={MockedComponent}
      // router={{ asPath: '/' }}
    />
  );
  // console.log(router);

  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(3);

  userEvent.click(links[0]);

  const url = await screen.findAllByText('Url');

  expect(url).toHaveLength(1);
});

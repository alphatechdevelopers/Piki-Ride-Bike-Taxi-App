import React from 'react';
import Layout from './components/layout/Layout';
import MainContent from './components/layout/MainContent';
import { NavigationProvider } from './contexts/NavigationContext';
import { MenuProvider } from './contexts/MenuContext';

export default function App() {
  return (
    <NavigationProvider>
      <MenuProvider>
        <Layout>
          <MainContent />
        </Layout>
      </MenuProvider>
    </NavigationProvider>
  );
}
import React from 'react';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main className="flex-grow container mx-auto p-6">{children}</main>
    <footer className="bg-gray-200 py-4 text-center text-gray-600">
      &copy; 2024 JS & CSS Minifier. All rights reserved.
    </footer>
  </div>
);

export default Layout;

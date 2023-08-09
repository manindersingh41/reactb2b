// Dashboard.test.js
// import React from 'react';

import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard'; // Adjust the import path based on your project structure

test('renders the Dashboard component with the correct heading', () => {
  render(<Dashboard />);
  
  // Check if the heading "Dashboard" is present
  const headingElement = screen.getByRole('heading', { name: /Dashboard/i });
  expect(headingElement).toBeInTheDocument();

  
  // Optionally, you can also test for other elements within your component
  // For example, test if the topbar div is present
  const topbarElement = screen.getByTestId('topbar');
  expect(topbarElement).toBeInTheDocument();
});
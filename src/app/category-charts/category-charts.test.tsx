import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import CategoryCharts from './category-charts';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders CategoryCharts component', () => {
  const wrapper = render(<CategoryCharts />);
  expect(wrapper).toBeTruthy();
});
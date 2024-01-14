// Assuming this is at the top of your test file
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ArcticleCreation from '../ArcticleCreation';
import { useMutation } from '@tanstack/react-query';

// Mocking the @tanstack/react-query module
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn() // Mocking the entire module
}));

describe('ArticleCreation component', () => {
  test('submits form with correct data', async () => {
    render(<ArcticleCreation />);

    // Mocking the useMutation response
    const mutateMock = jest.fn();
    (useMutation as jest.Mock).mockReturnValue({ mutate: mutateMock, isPending: false });

    // Fill the form fields
    userEvent.type(screen.getByLabelText(/Author/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/Title/i), 'Test Article');
    userEvent.type(screen.getByLabelText(/Email/i), 'john.doe@example.com');
    userEvent.type(screen.getByLabelText(/Snippet/i), 'This is a test snippet for the article.');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Create Article/i }));

    // Wait for the form submission to complete
    await waitFor(() => {
      expect(mutateMock).toHaveBeenCalledWith({
        author: 'John Doe',
        title: 'Test Article',
        email: 'john.doe@example.com',
        snippet: 'This is a test snippet for the article.'
      });
    });
  });
});

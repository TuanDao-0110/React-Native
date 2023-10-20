/* eslint-disable no-unused-vars */
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import LogInForm from '../components/LoginForm';




describe('Login Form', () => {
    // eslint-disable-next-line jest/expect-expect
    it('calls function provided by onSubmit prop after pressing the submit button', async() => {
        const onSubmit = jest.fn();
        render(<LogInForm onSubmit={onSubmit} />);
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent(screen.getByPlaceholderText('Email'), 'changeText', 'kalle')
        const submitButton = screen.getByText('Submit')
        expect(submitButton).toBeDefined()
        await waitFor (()=> { 
            fireEvent.press(submitButton);
        })
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual(
            'kalle',
            'password',
        );
    });
});

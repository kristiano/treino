import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, describe, beforeEach } from 'vitest';
import App from './App';
import { WORKOUTS } from './data';

describe('App Input Validation', () => {
    beforeEach(async () => {
        // Override Date globally or just start a workout directly
        render(<App />);

        // Find the first workout program and start it
        // Using string matching for start workout button
        const firstWorkout = Object.values(WORKOUTS)[0];

        // Find a workout card and click it
        const workoutCards = screen.getAllByText(firstWorkout.name);
        fireEvent.click(workoutCards[0]);

        // Wait for the workout to be visible and expanded
        // The first exercise is likely expanded by default when starting a new workout
        // We can also find the 'Começar Novo Treino' if resume modal appears
        try {
            const modalBtn = await screen.findByText(/Começar Novo Treino/i);
            fireEvent.click(modalBtn);
        } catch (e) {
            // no modal
        }
    });

    test('Weight input should filter validation natively and by React', async () => {
        const user = userEvent.setup();
        const weightInputs = await screen.findAllByPlaceholderText('—');
        const firstWeightInput = weightInputs[0];

        // Simulate typing a valid decimal input using userEvent
        await user.type(firstWeightInput, '12.5');
        expect(firstWeightInput.value).toBe('12.5');

        await user.clear(firstWeightInput);

        // type="number" in jsdom sets value to empty if invalid characters are set via fireEvent
        // so we test it blocking invalid letters via user action
        await user.type(firstWeightInput, '12a3');
        // Because a is ignored by type="number", it only types 123
        expect(firstWeightInput.value).toBe('123');
    });

    test('Reps input should reject letters and negative signs', async () => {
        // Find reps input fields (they don't have a fixed placeholder text, it depends on the target reps)
        const allNumericInputs = screen.getAllByRole('textbox').filter(el => el.getAttribute('inputmode') === 'numeric');
        const firstRepsInput = allNumericInputs[0];

        // Simulate typing text
        fireEvent.change(firstRepsInput, { target: { value: 'abc' } });
        expect(firstRepsInput.value).toBe('');

        // Simulate typing negative number string directly (though onKeyDown might prevent this in real typing, change event might bypass)
        fireEvent.change(firstRepsInput, { target: { value: '-10' } });
        expect(firstRepsInput.value).toBe('10'); // Should strip negative sign

        // Simulate valid input
        fireEvent.change(firstRepsInput, { target: { value: '15' } });
        expect(firstRepsInput.value).toBe('15');
    });

    test('Inputs block invalid keys on keydown', async () => {
        const user = userEvent.setup();
        const weightInputs = await screen.findAllByPlaceholderText('—');
        const firstWeightInput = weightInputs[0];

        // Emulate hitting letter 'e' on the weight input (which might mean scientific notation, but we want to block)
        // Actually our app blocks: ['-', '+', 'e', 'E', ',', ' ']
        firstWeightInput.focus();
        await user.keyboard('e');
        await user.keyboard('-');
        await user.keyboard('+');

        // Should still be empty as those keys were defaultPrevented
        expect(firstWeightInput.value).toBe('');

        // Test on reps input
        const allNumericInputs = screen.getAllByRole('textbox').filter(el => el.getAttribute('inputmode') === 'numeric');
        const firstRepsInput = allNumericInputs[0];

        firstRepsInput.focus();
        await user.keyboard('e');
        await user.keyboard('-');
        await user.keyboard('.');

        // Reps should block dots too since it's an integer
        expect(firstRepsInput.value).toBe('');
    });
});

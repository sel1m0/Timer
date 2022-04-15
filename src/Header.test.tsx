import React from 'react';
import { render } from "@testing-library/react-native";

import Header from "./Header";

describe('<Header />', () => {
    it('shows the text "Timer"', () => {
        const { getByText } = render(<Header />);
        expect(getByText("Timer")).toBeTruthy();
    });
});

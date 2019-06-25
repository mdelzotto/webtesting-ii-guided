import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import Players from './Players';

describe('<Players />', () => {
  it('should render "No players available" when no players are provided', () => {
    const { getByText } = render(<Players />);

    getByText(/no players/i);
  });

  it('should render "No players available" players is null', () => {
    const { queryByText } = render(<Players />);

    expect(queryByText(/no players/i)).not.toBeNull();
  });

  it('should render the provided list of players', () => {
      const players = [
        { id: 1, name: 'Frank'},
        { id: 2, name: 'Chloe'},
        { id: 3, name: 'Yasuke'}
      ];

      const { getAllByTestId } = render(<Players players={players} />);

      const playerNames = getAllByTestId('player-name').map(
        name => name.textContent
      );
      // Player names have the names from the DOM
      // check all names are displayed
      expect(playerNames).toHaveLength(players.length);

      const names = players.map(player => player.name);

      expect(playerNames).toEqual(names);
    });
});

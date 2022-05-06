import { render, screen } from '@testing-library/react';
import NewEntry from './CreateEntry';
import userEvent from '@testing-library/user-event';

// const user = {
//   id: 1,
//   created_at: '2022-05-06T16:56:56.159246+00:00',
//   content: 'test',
// };

// const server = setUpServer(
//   rest.get(
//     `https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries`,
//     (req, res, ctx) => res(ctx.json([user]))
//   )
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close);

describe(
  'create an entry',
  () =>
    it('NewEntry component should render', () => {
      render(<NewEntry />);

      screen.findByPlaceholderText('Add new entry');

      const test = screen.getByRole('button');

      expect(test).toBeInTheDocument();
    }),
  it('User should be able to create an entry', async () => {
    render(<NewEntry />);

    // const { input } = setup();
    const input = await screen.findByPlaceholderText('Add new entry');

    userEvent.type(input, 'test');
    screen.debug();
    expect(input.value).toBe('test');
  })
);

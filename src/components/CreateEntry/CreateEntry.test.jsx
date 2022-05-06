import { render, screen } from '@testing-library/react';
import NewEntry from './CreateEntry';

// const user = {
//   id: 1,
//   created_at: '2022-05-06T16:56:56.159246+00:00',
//   content: 'test',
// };

// const server = setUpServer(
//   rest.get(
//     `${process.enc.REACT_APP_SUPABASE_URL}/rest/v1/users`,
//     (req, res, ctx) => res(ctx.json([user]))
//   )
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close);

describe(
  'create an entry',
  () =>
    it('NewEntry component should render', async () => {
      render(<NewEntry />);

      screen.findAllByPlaceholderText('Add new entry');

      const test = screen.getByRole('button');

      screen.debug();

      expect(test).toBeInTheDocument();
    }),
  it('User should be able to create an entry', async () => {
      render(<NewEntry />);
  })
);

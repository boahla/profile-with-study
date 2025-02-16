import { getUser } from './utils/user';

test('return a user object', () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

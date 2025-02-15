export function getUser(id: number | string) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

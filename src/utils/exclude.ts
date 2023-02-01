// Exclude keys from user
// ref: https://www.prisma.io/docs/concepts/components/prisma-client/excluding-fields
export function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}

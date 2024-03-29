import { getUser, getUsers } from "@/services/user-service";

export const userQueries = {
  getAllUsers: () => getUsers(),
  getUser: (_: unknown, { username }: { username: string }) => getUser(username),
};

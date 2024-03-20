import { getUser, getUsers } from "@/services/user-service";

export const userQueries = {
  getAllUsers: () => getUsers(),
  getUser: (_: unknown, { id }: { id: string }) => getUser(id),
};

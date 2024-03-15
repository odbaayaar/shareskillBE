import { getUsers } from "@/services/user-service";

export const userQueries = {
  getAllUsers: () => getUsers(),
};

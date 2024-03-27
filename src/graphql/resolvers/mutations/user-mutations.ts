import { createUser, updateUser, deleteUser } from "@/services/user-service";
import { UserCreateInput, UserUpdateInput } from "@/graphql/generated";
import { Prisma } from "@prisma/client";

export const userMutations = {
  createUser: (_: unknown, { input }: { input: UserCreateInput }) => createUser(input),
  updateUser: (_: unknown, { input }: { input: Prisma.UserUpdateInput & { id: string } }) => updateUser(input),
  deleteUser: (_: unknown, { id }: { id: string }) => deleteUser(id),
};

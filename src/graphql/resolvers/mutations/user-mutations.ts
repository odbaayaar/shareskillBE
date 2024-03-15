import { createUser } from "@/services/user-service";
import { UserCreateInput } from "@/graphql/generated";

export const userMutations = {
  createUser: (_: unknown, { input }: { input: UserCreateInput }) => createUser(input),
};

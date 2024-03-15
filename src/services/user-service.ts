import { prisma } from "@/utils/prisma";
import { User, UserCreateInput } from "@/graphql/generated";

export const createUser = async (input: UserCreateInput): Promise<User> => {
  try {
    const result = await prisma.user.create({ data: input });
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    throw error;
  }
};

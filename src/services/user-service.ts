import { prisma } from "@/utils/prisma";
import { User, UserCreateInput, UserUpdateInput } from "@/graphql/generated";
import { Prisma } from "@prisma/client";

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

export const updateUser = async (input: Prisma.UserUpdateInput & { id: string }): Promise<User> => {
  try {
    const result = await prisma.user.update({
      where: { id: input.id },
      data: { firstName: input.firstName, lastName: input.lastName, emailAddress: input.emailAddress, profilePicture: input.profilePicture },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

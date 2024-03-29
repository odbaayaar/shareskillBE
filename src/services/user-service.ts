import { prisma } from "@/utils/prisma";
import { User, UserCreateInput, UserUpdateInput } from "@/graphql/generated";
import { Prisma } from "@prisma/client";

export const createUser = async (input: UserCreateInput): Promise<User> => {
  try {
    const used = await prisma.user.findUnique({ where: { emailAddress: input.emailAddress } });
    if (used) {
      return used;
    } else {
      const result = await prisma.user.create({ data: input });
      console.log({ input, result });
      return result;
    }
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

export const getUser = async (username: string): Promise<User> => {
  try {
    const result = await prisma.user.findUnique({ where: { username: username } });
    return result!;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (input: Prisma.UserUpdateInput & { id: string }): Promise<any> => {
  try {
    const result = await prisma.user.update({
      where: { id: input.id },
      data: { firstName: input.firstName, lastName: input.lastName, emailAddress: input.emailAddress, profilePicture: input.profilePicture, role: input.role, username: input.username },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<any> => {
  const msg = "succesfully deleted";
  try {
    const user = await prisma.user.delete({
      where: { id: id },
    });
    if (user) return msg;
  } catch (err) {
    throw err;
  }
};

export const deleteAll = async (): Promise<any> => {
  const msg = "succesfully deleted everything";
  try {
    const users = await prisma.user.deleteMany();
    if (users) return msg;
  } catch (error) {
    throw error;
  }
};

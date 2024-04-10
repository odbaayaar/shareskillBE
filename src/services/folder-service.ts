import { prisma } from "@/utils/prisma";
import { FolderCreateInput } from "@/graphql/generated";
import { Folder } from "@prisma/client";

export const createFolder = async (input: FolderCreateInput): Promise<Folder> => {
  try {
    const result = await prisma.folder.create({ data: input, include: { videos: true } });
    return result;
  } catch (err) {
    throw err;
  }
};

export const getAllFolders = async (): Promise<Folder[]> => {
  try {
    const result = await prisma.folder.findMany({ include: { videos: true } });
    return result;
  } catch (error) {
    throw error;
  }
};

// export const getAllVideosByUserId = async (creatorId: string): Promise<Video[]> => {
//   try {
//     const result = await prisma.video.findMany({ where: { creatorId: creatorId }, include: { categories: true } });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getUsers = async (): Promise<User[]> => {
//   try {
//     const result = await prisma.user.findMany();
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getUser = async (username: string): Promise<User> => {
//   try {
//     const result = await prisma.user.findFirst({
//       where: {
//         username: {
//           equals: username,
//           mode: "insensitive",
//         },
//       },
//     });
//     return result!;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateUser = async (input: Prisma.UserUpdateInput & { id: string }): Promise<any> => {
//   try {
//     const result = await prisma.user.update({
//       where: { id: input.id },
//       data: { firstName: input.firstName, lastName: input.lastName, emailAddress: input.emailAddress, profilePicture: input.profilePicture, role: input.role, username: input.username },
//     });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteUser = async (id: string): Promise<any> => {
//   const msg = "succesfully deleted";
//   try {
//     const user = await prisma.user.delete({
//       where: { id: id },
//     });
//     if (user) return msg;
//   } catch (err) {
//     throw err;
//   }
// };

// export const deleteAll = async (): Promise<any> => {
//   const msg = "succesfully deleted everything";
//   try {
//     const users = await prisma.user.deleteMany();
//     if (users) return msg;
//   } catch (error) {
//     throw error;
//   }
// };

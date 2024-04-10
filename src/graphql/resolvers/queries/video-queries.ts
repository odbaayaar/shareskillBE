import { getAllVideos, getAllVideosByUserId } from "@/services/upload-service";

export const videoQueries = {
  getAllVideos: () => getAllVideos(),
  getAllVideosByUserId: (_: unknown, { creatorId }: { creatorId: string }) => getAllVideosByUserId(creatorId),
};

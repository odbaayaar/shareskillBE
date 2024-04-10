import { uploadVideo } from "@/services/upload-service";
import { VideoCreateInput } from "@/graphql/generated";

export const videoMutations = {
  uploadVideo: (_: unknown, { input }: { input: VideoCreateInput }) => uploadVideo(input),
};

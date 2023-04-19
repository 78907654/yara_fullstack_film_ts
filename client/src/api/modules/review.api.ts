import privateClient from "../client/private.client";
import { IReviewEndpoints } from "../../types/interfaces";
import { IReviewadd } from "../../types/interfaces";
import { IReviewID } from "../../types/interfaces";

const reviewEndpoints: IReviewEndpoints = {
  list: "reviews",
  add: "reviews",
  remove: ({ reviewId }) => `reviews/${reviewId}`,
};

const reviewApi = {
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    content,
  }: IReviewadd) => {
    try {
      const response = await privateClient.post(reviewEndpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      });

      return { response };
    } catch (err: any) {
      return { err };
    }
  },
  remove: async ({ reviewId }: IReviewID) => {
    try {
      const response = await privateClient.delete(
        reviewEndpoints.remove({ reviewId })
      );

      return { response };
    } catch (err: any) {
      return { err };
    }
  },
  getList: async () => {
    try {
      const response = await privateClient.get(reviewEndpoints.list);

      return { response };
    } catch (err: any) {
      return { err };
    }
  },
};

export default reviewApi;

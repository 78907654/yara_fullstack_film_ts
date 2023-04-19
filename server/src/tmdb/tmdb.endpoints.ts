import tmdbConfig from "./tmdb.config.js";
import {
  SmediaList,
  SMediaDetail,
  Spersonid,
  SmediaSearch,
  SmediaGenres,
} from "../types/interfaces.js";
const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }: SmediaList) =>
    // tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, { page }),
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}?${page}`),
  mediaDetail: ({ mediaType, mediaId }: SMediaDetail) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}`),
  mediaGenres: ({ mediaType }: SmediaGenres) =>
    tmdbConfig.getUrl(`genre/${mediaType}/list`),
  mediaCredits: ({ mediaType, mediaId }: SMediaDetail) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`),
  mediaVideos: ({ mediaType, mediaId }: SMediaDetail) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`),
  mediaRecommend: ({ mediaType, mediaId }: SMediaDetail) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`),
  mediaImages: ({ mediaType, mediaId }: SMediaDetail) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`),
  mediaSearch: ({ mediaType, query, page }: SmediaSearch) =>
    // tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),
    tmdbConfig.getUrl(`search/${mediaType}?${query}&${page}`),
  personDetail: ({ personId }: Spersonid) =>
    tmdbConfig.getUrl(`person/${personId}`),
  personMedias: ({ personId }: Spersonid) =>
    tmdbConfig.getUrl(`person/${personId}/combined_credits`),
};

export default tmdbEndpoints;

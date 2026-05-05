import {
  ArtistAddedToChartPayload,
  ArtistFollowerMilestonePayload,
  ArtistNewTopSourceOfStreamPayload,
  ReleaseAddedToChartPayload,
  ReleaseIngestedPayload,
  ReleaseRecentlyReleasedPayload,
  TrackAddedToChartPayload,
  TrackAddedToPlaylistPayload,
  TrackNewTopSongPayload,
  UserAddedToLabelTeamPayload,
  UserInvitedToArtistTeamPayload,
} from "./utils/types";

type NotificationMetadata = {
  artistAddedToChart: ArtistAddedToChartPayload;
  artistFollowerMilestone: ArtistFollowerMilestonePayload;
  artistNewTopSourceOfStream: ArtistNewTopSourceOfStreamPayload;
  releaseAddedToChart: ReleaseAddedToChartPayload;
  releaseIngested: ReleaseIngestedPayload;
  releaseRecentlyReleased: ReleaseRecentlyReleasedPayload;
  trackAddedToChart: TrackAddedToChartPayload;
  trackAddedToPlaylist: TrackAddedToPlaylistPayload;
  trackNewTopSong: TrackNewTopSongPayload;
  userAddedToLabelTeam: UserAddedToLabelTeamPayload;
  userInvitedToArtistTeam: UserInvitedToArtistTeamPayload;
};

type NotificationKeys = keyof NotificationMetadata;

const _lookup: Record<keyof NotificationMetadata, 0> = {
  artistAddedToChart: 0,
  artistFollowerMilestone: 0,
  artistNewTopSourceOfStream: 0,
  releaseAddedToChart: 0,
  releaseIngested: 0,
  releaseRecentlyReleased: 0,
  trackAddedToChart: 0,
  trackAddedToPlaylist: 0,
  trackNewTopSong: 0,
  userAddedToLabelTeam: 0,
  userInvitedToArtistTeam: 0,
};

export const allNotificationKeys = Object.keys(
  _lookup
) as (keyof NotificationMetadata)[];

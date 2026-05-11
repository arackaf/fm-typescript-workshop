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

// TODO
export const allNotificationKeys: NotificationKeys[] = [];

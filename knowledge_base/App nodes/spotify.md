# Node: Spotify

**Name**: spotify
**Category**: input
**Description**: Access public song data via the Spotify API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Album (value: album)
  - Option: Artist (value: artist)
  - Option: Library (value: library)
  - Option: My Data (value: myData)
  - Option: Player (value: player)
  - Option: Playlist (value: playlist)
  - Option: Track (value: track)
- **operation** (options): Operation
  - Option: Add Song to Queue (value: addSongToQueue)
  - Option: Currently Playing (value: currentlyPlaying)
  - Option: Next Song (value: nextSong)
  - Option: Pause (value: pause)
  - Option: Previous Song (value: previousSong)
  - Option: Recently Played (value: recentlyPlayed)
  - Option: Resume (value: resume)
  - Option: Set Volume (value: volume)
  - Option: Start Music (value: startMusic)
- **id** (string): Enter a playlist, artist, or album URI or ID
- **id** (string): Enter a track URI or ID
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get New Releases (value: getNewReleases)
  - Option: Get Tracks (value: getTracks)
  - Option: Search (value: search)
- **id** (string): The album's Spotify URI or ID
- **query** (string): The keyword term to search for
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Albums (value: getAlbums)
  - Option: Get Related Artists (value: getRelatedArtists)
  - Option: Get Top Tracks (value: getTopTracks)
  - Option: Search (value: search)
- **id** (string): The artist's Spotify URI or ID
- **country** (string): Top tracks in which country? Enter the postal abbreviation
- **query** (string): The keyword term to search for
- **operation** (options): Operation
  - Option: Add an Item (value: add)
  - Option: Create a Playlist (value: create)
  - Option: Get (value: get)
  - Option: Get the User's Playlists (value: getUserPlaylists)
  - Option: Get Tracks (value: getTracks)
  - Option: Remove an Item (value: delete)
  - Option: Search (value: search)
- **id** (string): The playlist's Spotify URI or its ID
- **name** (string): Name of the playlist to create
- **additionalFields** (collection): Additional Fields
  - Option: description (value: undefined)
  - Option: public (value: undefined)
- **trackID** (string): The track's Spotify URI or its ID. The track to add/delete from the playlist.
- **additionalFields** (collection): Additional Fields
  - Option: position (value: undefined)
- **query** (string): The keyword term to search for
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Audio Features (value: getAudioFeatures)
  - Option: Search (value: search)
- **id** (string): The track's Spotify URI or ID
- **query** (string): The keyword term to search for
- **operation** (options): Operation
  - Option: Get Liked Tracks (value: getLikedTracks)
- **operation** (options): Operation
  - Option: Get Following Artists (value: getFollowingArtists)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **limit** (number): Max number of results to return
- **volumePercent** (number): The volume percentage to set
- **filters** (collection): Filters
  - Option: country (value: undefined)
- **filters** (collection): Filters
  - Option: market (value: undefined)

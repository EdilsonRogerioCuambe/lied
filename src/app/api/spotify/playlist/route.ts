import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID;

  if (!clientId || !clientSecret || !playlistId) {
    return NextResponse.json(
      { error: "Spotify credentials not set" },
      { status: 500 }
    );
  }

  // Get access token
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });
  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    return NextResponse.json(
      { error: "Failed to get Spotify token" },
      { status: 500 }
    );
  }

  // Fetch playlist data
  const playlistRes = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    }
  );
  const playlistData = await playlistRes.json();

  return NextResponse.json(playlistData);
}

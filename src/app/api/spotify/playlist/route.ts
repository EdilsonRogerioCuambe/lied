import { NextResponse } from "next/server";

export async function GET(request: Request) {
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

  // Optional proxy to arbitrary Spotify endpoint from client
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");

  const url = endpoint
    ? `https://api.spotify.com/v1/${endpoint.replace(/^\//, "")}`
    : `https://api.spotify.com/v1/playlists/${playlistId}`;

  const apiRes = await fetch(url, {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  if (!apiRes.ok) {
    return NextResponse.json(
      { error: `Spotify API error: ${apiRes.status}` },
      { status: apiRes.status }
    );
  }

  const data = await apiRes.json();
  return NextResponse.json(data);
}

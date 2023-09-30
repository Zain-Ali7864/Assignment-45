function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create dictionaries for different albums
const album1 = make_album('Artist1', 'Album1');
const album2 = make_album('Artist2', 'Album2', 12); // Including the number of tracks
const album3 = make_album('Artist3', 'Album3');

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);

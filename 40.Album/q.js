function makeAlbum(artistName, albumName, noOfTracks) {
    if (noOfTracks === void 0) { noOfTracks = 6; }
    var album = {
        artistName: artistName,
        albumName: albumName,
        noOfTracks: noOfTracks,
    };
    return album;
}
console.log(makeAlbum("SHAYAN", "YAKAM"));
console.log(makeAlbum("ZAYN MALIK", "ICARUS FALLS"));
console.log(makeAlbum("CHARLIE PUTH", "NINE TRACK MIND", 12));

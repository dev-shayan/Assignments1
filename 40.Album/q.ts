function makeAlbum(artistName,albumName,noOfTracks= 6){
    let album = {
        artistName : artistName,
        albumName : albumName,
        noOfTracks : noOfTracks,}
        return album;
}
console.log(makeAlbum("SHAYAN","YAKAM"));
console.log(makeAlbum("ZAYN MALIK","ICARUS FALLS"));
console.log(makeAlbum("CHARLIE PUTH","NINE TRACK MIND",12));


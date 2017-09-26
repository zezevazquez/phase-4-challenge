const {
  getAll,
  getByID
} = require('./db/albums')

const getAlbums = () => {
  return getAll()
}
const getAlbumsByID = (albumID) => {
  return getByID(albumID)
}

module.exports = {
  getAlbums,
  getAlbumsByID
}

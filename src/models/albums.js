const { getAll, getByID } = require('./db/albums')
console.log('loggin getAlbums:: ',getAll)

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

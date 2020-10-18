module.exports = function getFileExtensionFromMimeType(mimeType){
  return mimeType.split('/')[1];
}
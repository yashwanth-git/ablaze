//Media Resize

export const resizeImage = (imagePath, size) => {
  if (imagePath === null) {
    return imagePath;
  }
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games", `media/resize/${size}/-/games`);
  return image;
};

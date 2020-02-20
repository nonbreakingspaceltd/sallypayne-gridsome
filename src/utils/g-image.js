export const toGImage = (image) => ({
  dataUri: image.asset.metadata.lqip,
  src: image.asset.url,
  srcset: image.srcset,
  alt: image.altText,
});

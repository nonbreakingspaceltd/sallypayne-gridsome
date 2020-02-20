export const toCard = node => {
  const cardContent = {
    id,
    title,
    subtitle: excerpt,
    href: (href && href.url) || (link && link.url),
    slug: slug && slug.current,
    type: _type
  };

  if (node) {
    cardContent.thumbnail = {
      src: this.imageSrc,
      width: metadata.width,
      height: metadata.height,
      alt: this.imageAlt,
      dataUri: this.lqip,
      size: { width: '100%' },
      srcset: [this.imageSrc],
      sizes: `100vw`
    };
  }

  return cardContent;
};

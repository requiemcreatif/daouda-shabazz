import React from "react";

const LazyImage = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
);

export default LazyImage;

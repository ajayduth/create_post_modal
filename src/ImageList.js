import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const type = "Image"; // Need to pass which type element can be draggable

const Image = ({ image }) => {
  return (
    <div
      className="file-item"
    >
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

const ImageList = ({ images }) => {
  const renderImage = (image, index) => {
    return (
      <Image
        image={image}
        index={index}
        key={`${image.id}-image`}
        // moveImage={moveImage}
      />
    );
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;
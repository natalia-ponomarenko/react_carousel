import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
};

export const Carousel: React.FC<Props> = ({
  images,
  itemWidth,
  frameSize,
  animationDuration,
  step,
  infinite,
}) => {
  const [shift, setShift] = useState(0);

  const frameWidth = itemWidth * frameSize;
  const maxShift = (images.length - frameSize) * itemWidth;
  const possibleShift = itemWidth * step;
  const fullWidth = images.length * itemWidth;

  const moveRight = () => {
    if (infinite && (shift === -maxShift)) {
      setShift(possibleShift);
    }

    setShift(prevState => (prevState - possibleShift <= -maxShift
      ? -maxShift
      : prevState - possibleShift));
  };

  const moveLeft = () => {
    if (infinite && (shift === 0)) {
      setShift(-fullWidth);
    }

    setShift(prevState => (prevState <= -possibleShift
      ? prevState + possibleShift
      : 0));
  };

  return (
    <div className="Carousel">
      <div
        className="Carousel__wrapper"
        style={{
          width: `${frameWidth}px`,
        }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${shift}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((image: string, index: number) => (
            <li key={image}>
              <img
                src={image}
                alt={`smilie № ${index + 1}`}
                style={{ width: `${itemWidth}px` }}
              />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={moveLeft}
      >
        Prev
      </button>
      <button
        type="button"
        data-cy="next"
        onClick={moveRight}
      >
        Next
      </button>
    </div>
  );
};

import React, { useReducer } from 'react';
import './App.scss';
import { Carousel } from './components/Carousel';
import { formReducer } from './formReducer';
import { initialState } from './variables';
import { Input } from './components/Input';
import { CheckBox } from './components/Checkbox';

const App: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const {
    images,
    itemWidth,
    frameSize,
    step,
    animationDuration,
    infinite,
  } = state;

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: 'HANDLE NUMBER INPUT',
      name,
      payload: +value,
    });
  };

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <h1 data-cy="title">Carousel with {images.length} images</h1>

      <Carousel
        images={images}
        itemWidth={itemWidth}
        frameSize={frameSize}
        step={step}
        animationDuration={animationDuration}
        infinite={infinite}
      />

      <div>
        <Input
          labelText="Image width"
          id="itemWidth"
          min="100"
          max="300"
          value={state.itemWidth}
          handleChange={handleNumberInputChange}
        />
        <Input
          labelText="Number of pictures shown"
          id="frameSize"
          min="1"
          max={images.length.toString()}
          value={state.frameSize}
          handleChange={handleNumberInputChange}
        />

        <Input
          labelText="Step"
          id="step"
          min="1"
          max="10"
          value={state.step}
          handleChange={handleNumberInputChange}
        />

        <Input
          labelText="Animation Duration"
          id="animationDuration"
          min="500"
          max="3000"
          step="500"
          value={state.animationDuration}
          handleChange={handleNumberInputChange}
        />

        <CheckBox
          labelText="Infinite"
          id="infinite"
          checked={state.infinite}
          onChange={() => dispatch({ type: 'HANDLE CHECKBOX' })}
        />
      </div>
    </div>
  );
};

export default App;

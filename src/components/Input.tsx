type Props = {
  labelText: string,
  id: string,
  value: number,
  min: string,
  max: string,
  step?: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({
  labelText,
  id,
  value,
  min,
  max,
  step,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="number"
        id={id}
        name={id}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;

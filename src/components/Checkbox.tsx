type Props = {
  labelText: string,
  id: string,
  checked: boolean,
  onChange: any,
};

export const CheckBox: React.FC<Props> = ({
  labelText,
  id,
  checked,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;

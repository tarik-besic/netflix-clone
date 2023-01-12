import { ErrorMessage, Field, FieldInputProps, useField } from "formik";
import { useRef, useState } from "react";

// interface for inputFiled that extends default props used in Formik forms
interface Props extends FieldInputProps<string> {
  label: string;
  name: string;
  type: string;
  className: string;
}

const InputField = (props: Props) => {
  // props
  const { label, className, name } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const [field, meta, helper] = useField(name);

  const transformInput = (!active && field.value) || active;

  return (
    <div
      className={`relative flex pt-4 pb-2 px-4 flex-col outline-none bg-neutral-700 rounded-sm ${className} ${
        !transformInput ? "cursor-pointer" : ""
      }"}`}
    >
      <label
        onClick={(e) => {
          setActive(true);
          inputRef.current!.focus();
        }}
        className={`absolute cursor-pointer text-neutral-500 transition-all duration-100 ease-in-out ${
          transformInput ? "scale-75 -translate-y-2 transition-[left] duration-0 left-0" : ""
        }`}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        onFocus={() => setActive(true)}
        className={`h-10 bg-transparent border-transparent focus:border-transparent focus:outline-none
        ${transformInput ? "h-fit" : ""}
        `}
        {...field}
        onBlur={() => setActive(false)}
      />
    </div>
  );
};

export default InputField;

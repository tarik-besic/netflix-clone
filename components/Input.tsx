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
      className={`h-[50px] relative flex flex-col outline-none bg-neutral-700 rounded-t ${className} ${
        !transformInput ? "cursor-pointer" : ""
      }"}`}
    >
      <input
        ref={inputRef}
        onFocus={() => setActive(true)}
        className="h-[50px] pt-4 pb-0 px-5 bg-transparent border-transparent focus:border-transparent focus:outline-none"
        {...field}
        onBlur={() => setActive(false)}
      />
      <label
        onClick={(e) => {
          setActive(true);
          inputRef.current!.focus();
        }}
        className={`absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer text-[#8c8c8c] transition-all duration-100 ease-in-out ${
          transformInput ? "text-[11px] translate-y-0 top-[7px]" : "text-base"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;

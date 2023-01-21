import { useField } from "formik";
import { useRef, useState } from "react";

interface Props {
  name: string;
  type: string;
  className?: string;
  label: string;
}

const InputField = (props: Props) => {
  // props
  const { label, className, name } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [field] = useField(name);

  // states
  const [active, setActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // boolean value for floating label
  const transformInput = (!active && field.value) || active;

  const displayButtonLabel = field.value.length > 0;
  return (
    <div
      className={`h-[50px] cursor-text relative flex flex-col outline-none rounded-t rounded-b ${className} ${
        !transformInput ? "bg-[#454545]" : ""
      } ${active ? "bg-[#454545]" : "bg-[#333333]"}`}
      onClick={() => {
        inputRef.current!.focus();
      }}
    >
      <div className="flex items-center">
        <input
          {...field}
          ref={inputRef}
          onFocus={() => setActive(true)}
          className="text-white h-[50px] pt-4 pb-0 px-5 bg-transparent border-transparent focus:border-transparent focus:outline-none"
          type={showPassword ? "text" : props.type}
          onBlur={() => setActive(false)}
        />
        {props.type === "password" && displayButtonLabel && (
          <div
            className="text-[#8c8c8c] mr-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {field.value.length > 0 && (showPassword ? "SHOW" : "HIDE")}
          </div>
        )}
      </div>
      <label
        onClick={() => {
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

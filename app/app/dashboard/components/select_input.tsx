import { InputFieldProps } from "./types";

interface SelectInputProps extends InputFieldProps {
  options: { name: string; value: string }[];
}

export function SelectInput(props: SelectInputProps) {
  const { name, register, form_identifier, error_message, options } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <select
        {...register(form_identifier, {
          required: "Du må velge et alternativ.",
        })}
        className="mt-2 block  rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="gutter-16"
      >
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
      <p
        className={
          error_message
            ? "visible mt-2 text-sm text-red-600"
            : "invisible mt-2 text-sm text-red-600"
        }
        id="date-error"
      >
        {error_message ? error_message : "no-error"}
      </p>
    </div>
  );
}

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { InputFieldProps } from "./types";

// Text input gives you a text input with support for error messages.
export function TextInput(props: InputFieldProps) {
  const {
    name,
    register,
    errors,
    placeholder,
    form_identifier,
    error_message,
  } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2">
        <input
          type="text"
          {...register(form_identifier, {
            required: "Du må fylle ut feltet",
            maxLength: 40,
          })}
          className="block w-72 lg:w-52 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      <p
        className={
          error_message
            ? "visible mt-2 text-sm text-red-600"
            : "invisible mt-2 text-sm text-red-600"
        }
        id="desc-error"
      >
        {error_message ? error_message : "no-error"}
      </p>
    </div>
  );
}

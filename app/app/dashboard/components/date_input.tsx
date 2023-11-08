import { InputFieldProps } from "./types";

export function DateInput(props: InputFieldProps) {
  const { register, errors, name, form_identifier, error_message } = props;
  return (
    <div className="relative max-w-sm">
      <label
        htmlFor="date"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.name}
      </label>
      <div className="mt-2">
        <input
          type="date"
          {...register(form_identifier, {
            required: "Du må sette en dato.",
          })}
          className="block w-72 lg:w-52 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Select date"
        />
      </div>

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

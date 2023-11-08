import { InputFieldProps } from "./types";

// Currenct input gives you a currency input with support for error messages.
export function CurrencyInput(props: InputFieldProps) {
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
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">kr</span>
        </div>
        <input
          type="text"
          {...register(form_identifier, {
            valueAsNumber: true,
            validate: {
              isNotNaN: (v) => (isNaN(v) ? "Ikke gyldig tall" : undefined),
            },
          })}
          className="block w-72 lg:w-52 rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            NOK
          </span>
        </div>
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

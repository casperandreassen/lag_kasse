interface HeaderWithActionButtonsProps {
  button1Name: string;
  button1Action: () => void;
  button2Name: string;
  button2Form: string;
  title: string;
}

export function HeaderWithActionButtons(props: HeaderWithActionButtonsProps) {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {props.title}
      </h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={props.button1Action}
        >
          {props.button1Name}
        </button>
        <button
          type="submit"
          form={props.button2Form}
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {props.button2Name}
        </button>
      </div>
    </div>
  );
}

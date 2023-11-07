import { ChevronDownIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    id: 1,
    name: "Fergebiletter",
    description: "Fergebiletter",
    date: new Date(),
    out: "0.00",
    in: "2,000.00",
    delta: -2000,
  },
  {
    id: 2,
    name: "Standsalg",
    description: "Inntekter fra vaffelsalg.",
    date: new Date(),
    out: "1000.00",
    in: "0.0",
    delta: 1000,
  },
  {
    id: 3,
    name: "Salg av doruller",
    description: "Salg av doruller.",
    date: new Date(),
    out: "0.0",
    in: "1110.0",
    delta: 1110,
  },
  {
    id: 4,
    name: "Fergebiletter",
    description: "Fergebiletter",
    date: new Date(),
    out: "0.00",
    in: "2,000.00",
    delta: -2000,
  },
  {
    id: 5,
    name: "Standsalg",
    description: "Inntekter fra vaffelsalg.",
    date: new Date(),
    out: "1000.00",
    in: "0.0",
    delta: 1000,
  },
  {
    id: 6,
    name: "Salg av doruller",
    description: "Salg av doruller.",
    date: new Date(),
    out: "0.0",
    in: "1110.0",
    delta: 1110,
  },
  {
    id: 7,
    name: "Fergebiletter",
    description: "Fergebiletter",
    date: new Date(),
    out: "0.00",
    in: "2,000.00",
    delta: -2000,
  },
  {
    id: 8,
    name: "Standsalg",
    description: "Inntekter fra vaffelsalg.",
    date: new Date(),
    out: "1000.00",
    in: "0.0",
    delta: 1000,
  },
  {
    id: 9,
    name: "Salg av doruller",
    description: "Salg av doruller.",
    date: new Date(),
    out: "0.0",
    in: "1110.0",
    delta: 1110,
  },
  // More projects...
];

export default function TransactionTable() {
  return (
    <div className="py-2 sm:px-2 lg:px-3">
      <div className="flex items-center justify-between py-3 px-2">
        <div>
          <select
            id="gruppe"
            name="gruppe"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Alle"
          >
            <option>Alle</option>
            <option>Gutter 16</option>
            <option>Jenter 16</option>
            <option>Jenter 20</option>
          </select>
        </div>
        <div className="sm:ml-16 sm:mt-0 sm:flex-none">
          <a
            href="#"
            className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
            Ny transaksjon
          </a>
        </div>
      </div>
      <div className=" mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th
                scope="col"
                className="hidden sm:table-cell py-3.5 pl-4 pr-3 ml-3 text-left text-sm font-semibold text-gray-900 sm:pl-2"
              >
                <a href="#" className="group inline-flex">
                  Beskrivelse
                  <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="sm:hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                <a href="#" className="group inline-flex">
                  Dato / Beskrivelse
                  <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                <a href="#" className="group inline-flex">
                  Dato
                  <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                <a href="#" className="group inline-flex">
                  Ut
                  <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="hidden sm:table-cell px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
              >
                <a href="#" className="group inline-flex">
                  Inn
                  <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="sm:hidden py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              >
                <a href="#" className="group inline-flex">
                  Beløp
                  <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-200 even:bg-gray-50"
              >
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-2">
                  <div className="hidden sm:block font-medium text-gray-900">
                    {project.name}
                  </div>
                  <div className="sm:hidden font-medium text-gray-900">
                    {project.date.toLocaleDateString("nb-NO")}
                  </div>
                  <div className="mt-1 truncate text-gray-500">
                    {project.description}
                  </div>
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                  {project.date.toLocaleDateString("nb-NO")}
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                  {project.out}
                </td>
                <td className="hidden py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0 sm:table-cell">
                  {project.in}
                </td>
                <td className="sm:hidden py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  {project.delta > 0 ? `+${project.delta}` : `${project.delta}`}
                </td>
                <td className="relative whitespace-nowrap py-2 px-3 text-right text-sm font-medium sm:px-5">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Vis<span className="sr-only"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Subtotal
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
              >
                Subtotal
              </th>
              <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                $8,800.00
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Tax
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
              >
                Tax
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                $1,760.00
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Total
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                Total
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $10,560.00
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

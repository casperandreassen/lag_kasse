"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from "@heroicons/react/20/solid";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const stats = [
  {
    name: "Innskudd",
    value: "103.30 NOK",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Uttak",
    value: "13,000.00 NOK",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Saldo pr 06.11.23",
    value: "245,988.00 NOK",
    change: "-1.39%",
    changeType: "negative",
  },
  {
    name: "Kostnader",
    value: "30,156.00 NOK",
    change: "+10.18%",
    changeType: "negative",
  },
];
const statuses = {
  Innskudd: "text-green-700 bg-green-50 ring-green-600/20",
  Uttak: "text-gray-600 bg-gray-50 ring-gray-500/10",
};
const days = [
  {
    date: "I dag",
    dateTime: "2023-03-22",
    transactions: [
      {
        id: 1,
        invoiceNumber: "00012",
        href: "#",
        amount: "103.30 NOK",
        tax: "500.00 NOK",
        status: "Innskudd",
        client: "Kåre Willoch",
        description: "Tilbakebetaling for brus",
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: "00011",
        href: "#",
        amount: "13,000.00 NOK",
        status: "Uttak",
        client: "Tom Cook",
        description: "Danacup",
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: "00009",
        href: "#",
        amount: "2,000.00 NOK",
        tax: "130.00 NOK",
        status: "Innskudd",
        client: "Standsalg",
        description: "Salg av vafler",
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: "I går",
    dateTime: "2023-03-21",
    transactions: [
      {
        id: 4,
        invoiceNumber: "00010",
        href: "#",
        amount: "14,000.00 NOK",
        tax: "900.00 NOK",
        status: "Innskudd",
        client: "SavvyCal",
        description: "Søppelfjerning",
        icon: ArrowUpCircleIcon,
      },
    ],
  },
];

const secondaryNavigation = [
  { name: "Siste 7 dager", href: "#", current: true },
  { name: "Siste 30 dager", href: "#", current: false },
  { name: "Alt", href: "#", current: false },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function GroupDashboard() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        {/* Secondary navigation */}
        <header className="pb-4 pt-6 sm:pb-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
            <h1 className="text-base font-semibold leading-7 text-gray-900">
              Kontantstrøm
            </h1>
            <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={item.current ? "text-indigo-600" : "text-gray-700"}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Link
              href="/dashboard/transaksjoner/ny"
              className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
              Ny transaksjon
            </Link>
          </div>
        </header>

        {/* Stats */}
        <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
            {stats.map((stat, statIdx) => (
              <div
                key={stat.name}
                className={classNames(
                  statIdx % 2 === 1
                    ? "sm:border-l"
                    : statIdx === 2
                    ? "lg:border-l"
                    : "",
                  "flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
                )}
              >
                <dt className="text-sm font-medium leading-6 text-gray-500">
                  {stat.name}
                </dt>
                <dd
                  className={classNames(
                    stat.changeType === "negative"
                      ? "text-rose-600"
                      : "text-gray-700",
                    "text-xs font-medium"
                  )}
                >
                  {stat.change}
                </dd>
                <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          aria-hidden="true"
        >
          <div
            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
            style={{
              clipPath:
                "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
            }}
          />
        </div>
      </div>

      <div className="space-y-16 py-16 xl:space-y-20">
        {/* Recent activity table */}
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
              Nylig aktivitet
            </h2>
          </div>
          <div className="mt-6 overflow-hidden border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <table className="w-full text-left">
                  <thead className="sr-only">
                    <tr>
                      <th>Beløp</th>
                      <th className="hidden sm:table-cell">Gruppe</th>
                      <th>Flere detaljer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {days.map((day) => (
                      <Fragment key={day.dateTime}>
                        <tr className="text-sm leading-6 text-gray-900">
                          <th
                            scope="colgroup"
                            colSpan={3}
                            className="relative isolate py-2 font-semibold"
                          >
                            <time dateTime={day.dateTime}>{day.date}</time>
                            <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                          </th>
                        </tr>
                        {day.transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="relative py-5 pr-6">
                              <div className="flex gap-x-6">
                                <transaction.icon
                                  className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                  aria-hidden="true"
                                />
                                <div className="flex-auto">
                                  <div className="flex items-start gap-x-3">
                                    <div className="text-sm font-medium leading-6 text-gray-900">
                                      {transaction.amount}
                                    </div>
                                    <div
                                      className={classNames(
                                        statuses[transaction.status],
                                        "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                                      )}
                                    >
                                      {transaction.status}
                                    </div>
                                  </div>
                                  {transaction.tax ? (
                                    <div className="mt-1 text-xs leading-5 text-gray-500">
                                      {transaction.tax} tax
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                              <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                            </td>
                            <td className="hidden py-5 pr-6 sm:table-cell">
                              <div className="text-sm leading-6 text-gray-900">
                                {transaction.client}
                              </div>
                              <div className="mt-1 text-xs leading-5 text-gray-500">
                                {transaction.description}
                              </div>
                            </td>
                            <td className="py-5 text-right">
                              <div className="flex justify-end">
                                <a
                                  href={transaction.href}
                                  className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                                >
                                  Se
                                  <span className="hidden sm:inline">
                                    {" "}
                                    transaksjon
                                  </span>
                                  <span className="sr-only">
                                    #{transaction.invoiceNumber},{" "}
                                    {transaction.client}
                                  </span>
                                </a>
                              </div>
                              <div className="mt-1 text-xs leading-5 text-gray-500">
                                {" "}
                                <span className="text-gray-900">
                                  #{transaction.invoiceNumber}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

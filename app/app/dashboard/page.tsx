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
import { GroupDashboard } from "./components/group_dashboard";
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
const clients = [
  {
    id: 1,
    name: "Gutter 16",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "2,000.00 NOK",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "Jenter 16",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "14,000.00 NOK",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Jenter 20",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "7,600.00 NOK",
      status: "Paid",
    },
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

export default function Page() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <GroupDashboard />
        {/* Recent client list*/}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Nylige grupper
              </h2>
              <Link
                href="/dashboard/grupper"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Se alle<span className="sr-only">, grupper</span>
              </Link>
            </div>
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
            >
              {clients.map((client) => (
                <li
                  key={client.id}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                    <div className="text-sm font-medium leading-6 text-gray-900">
                      {client.name}
                    </div>
                    <Menu as="div" className="relative ml-auto">
                      <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                                )}
                              >
                                Se gruppe
                                <span className="sr-only">, {client.name}</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                                )}
                              >
                                Rediger
                                <span className="sr-only">, {client.name}</span>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Siste transaksjon</dt>
                      <dd className="text-gray-700">
                        <time dateTime={client.lastInvoice.dateTime}>
                          {client.lastInvoice.date}
                        </time>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Saldo</dt>
                      <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">
                          {client.lastInvoice.amount}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

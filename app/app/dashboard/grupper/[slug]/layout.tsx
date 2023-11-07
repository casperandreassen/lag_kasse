"use client";

import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const pathname = usePathname();
  const tabs = [
    {
      name: "Oversikt",
      href: `/dashboard/grupper/${params.slug}/oversikt`,
      current: true,
    },
    {
      name: "Medlemmer",
      href: `/dashboard/grupper/${params.slug}/medlemmer`,
      current: false,
    },
    {
      name: "Innstillinger",
      href: `/dashboard/grupper/${params.slug}/innstillinger`,
      current: false,
    },
  ];
  const current = tabs.find((tab) => tab.current);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Gutter 16
        </h1>
      </div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={current && current.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => {
                let current = pathname === tab.href;
                return (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    {tab.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

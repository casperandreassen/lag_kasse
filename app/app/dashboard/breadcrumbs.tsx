"use client";
import { HomeIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import { links, navigation } from "./nav";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths: string[] = [];
  for (let i = 0; i < pathname.length; i++) {
    console.log("Hello");
    if (pathname[i] === "/" && i > 0) {
      paths.push(pathname.substring(0, i));
    } else if (i + 1 == pathname.length) {
      paths.push(pathname.substring(0, i + 1));
    }
  }
  console.log(paths);
  return (
    <header className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {links.map((page) => {
            let current = pathname == page.href;
            if (paths.includes(page.href) && page.href !== "/dashboard") {
              return (
                <li key={page.name}>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <a
                      href={page.href}
                      className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-500"
                      aria-current={current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              );
            }
          })}
        </ol>
      </div>
    </header>
  );
}

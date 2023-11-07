"use server";
import { Suspense } from "react";
import Nav from "./nav";
import Breadcrumb from "./breadcrumbs";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <div className="min-h-full">
          <div className="bg-gray-800 pb-32">
            <Suspense>
              <Nav />
            </Suspense>
            <Breadcrumb />
          </div>

          <main className="-mt-32">
            <div className="mx-auto max-w-7xl pb-12 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-white shadow ">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

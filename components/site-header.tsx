"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { site, mainNav } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { LabMark } from "@/components/lab-mark";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <LabMark className="size-7 text-primary" />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/coa"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            COA Lookup
          </Link>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="h-9 px-4"
          >
            Request Testing
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm">
              <SheetHeader className="border-b border-border">
                <SheetTitle className="flex items-center gap-2.5">
                  <LabMark className="size-6 text-primary" />
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-3">
                {mainNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <SheetClose
                      key={item.href}
                      render={<Link href={item.href} />}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                        active
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {item.title}
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  className="h-11 w-full"
                >
                  Request Testing
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

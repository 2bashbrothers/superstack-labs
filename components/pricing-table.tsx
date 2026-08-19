"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { pricing, pricingCategories, slugify } from "@/lib/pricing";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export function PricingTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pricing.filter((row) => {
      const matchesCategory = category === "all" || row.category === category;
      const matchesQuery =
        q === "" ||
        row.compound.toLowerCase().includes(q) ||
        row.method.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const grouped = useMemo(() => {
    return pricingCategories
      .map((cat) => ({
        category: cat,
        rows: filtered.filter((row) => row.category === cat),
      }))
      .filter((group) => group.rows.length > 0);
  }, [filtered]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <SearchIcon
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search compound or method"
            aria-label="Search compounds"
            className="h-11 pl-9"
          />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {filtered.length} of {pricing.length} analyses
        </p>
      </div>

      <div className="mt-6 overflow-x-auto pb-2">
        <ToggleGroup
          value={[category]}
          onValueChange={(value) => setCategory(value[0] ?? "all")}
          className="flex w-max gap-1"
        >
          <ToggleGroupItem value="all" className="whitespace-nowrap text-sm">
            All
          </ToggleGroupItem>
          {pricingCategories.map((cat) => (
            <ToggleGroupItem
              key={cat}
              value={cat}
              className="whitespace-nowrap text-sm"
            >
              {cat}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="mt-8 border-t border-border">
        {grouped.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            No analyses match your search.
          </p>
        ) : (
          grouped.map((group) => (
            <div key={group.category} className="border-b border-border py-8">
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-3">
                  <h3 className="label-technical sticky top-24">
                    {group.category}
                  </h3>
                </div>
                <ul className="md:col-span-9">
                  {group.rows.map((row) => (
                    <li
                      key={row.compound}
                      className="flex items-center justify-between gap-4 border-b border-border/60 py-3.5 last:border-0"
                    >
                      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                        <span className="truncate font-medium">
                          {row.compound}
                        </span>
                        <Badge
                          variant="outline"
                          className="w-fit font-mono text-[11px] text-muted-foreground"
                        >
                          {row.method}
                        </Badge>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span
                          className={cn(
                            "tabular text-right font-medium",
                            row.price === 0 && "text-sm text-muted-foreground",
                          )}
                        >
                          {row.price === 0
                            ? "On request"
                            : `$${row.price.toLocaleString()}`}
                        </span>
                        {row.price === 0 ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            render={<Link href="/contact" />}
                            nativeButton={false}
                            className="text-muted-foreground"
                          >
                            Quote
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            render={
                              <Link
                                href={`/order?compound=${slugify(row.compound)}`}
                              />
                            }
                            nativeButton={false}
                            aria-label={`Order analysis for ${row.compound}`}
                          >
                            Order
                            <ArrowRightIcon data-icon="inline-end" />
                          </Button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MainMenuCategory,
  MenuCategory,
  MenuPosition,
  mainMenuCategories,
} from "./menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: () => void;
}

export default function MenuSection({ onClose }: Props) {
  const [activeMainCategory, setActiveMainCategory] = useState<string | null>(
    null,
  );
  const [activeBarSubcategory, setActiveBarSubcategory] = useState<
    string | null
  >(null);

  const barCategory = mainMenuCategories.find(({ id }) => id === "bar");
  const scrollContainerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const activeMainCategoryRef = useRef<string | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    activeMainCategoryRef.current = activeMainCategory;
  }, [activeMainCategory]);

  const scrollToCategory = (categoryId: string) => {
    const container = scrollContainerRef.current;
    const target = document.getElementById(categoryId);

    if (!container || !target) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const targetTop =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;

    isProgrammaticScrollRef.current = true;
    if (programmaticScrollTimeoutRef.current) {
      clearTimeout(programmaticScrollTimeoutRef.current);
    }
    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 700);

    container.scrollTo({
      top: targetTop - headerHeight - 8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const subcategories = barCategory?.subcategories;

    if (!container || !subcategories?.length) return;

    const observedMainEntries = new Map<string, IntersectionObserverEntry>();
    const observedBarEntries = new Map<string, IntersectionObserverEntry>();

    const getClosestId = (
      entriesMap: Map<string, IntersectionObserverEntry>,
      activationLine: number,
    ) => {
      let closestId: string | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const [id, entry] of entriesMap) {
        if (!entry.isIntersecting) continue;

        const distance = Math.abs(
          entry.boundingClientRect.top - activationLine,
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }

      return closestId;
    };

    const updateActiveFromScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const containerTop = container.getBoundingClientRect().top;
      const activationLine = containerTop + headerHeight + 24;

      const closestMainId = getClosestId(observedMainEntries, activationLine);

      if (closestMainId && closestMainId !== activeMainCategoryRef.current) {
        setActiveMainCategory(closestMainId);
        activeMainCategoryRef.current = closestMainId;

        if (closestMainId !== "bar") {
          setActiveBarSubcategory(null);
          return;
        }
      }

      if (activeMainCategoryRef.current !== "bar") return;

      const closestBarId = getClosestId(observedBarEntries, activationLine);
      if (!closestBarId) return;

      setActiveBarSubcategory((current) =>
        current === closestBarId ? current : closestBarId,
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.id;

          if (sectionId.startsWith("bar-")) {
            observedBarEntries.set(sectionId.replace(/^bar-/, ""), entry);
          } else {
            observedMainEntries.set(sectionId, entry);
          }
        }
        updateActiveFromScroll();
      },
      {
        root: container,
        rootMargin: `-${(headerRef.current?.offsetHeight ?? 0) + 8}px 0px -45% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const { id } of mainMenuCategories) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    for (const { id } of subcategories) {
      const section = document.getElementById(`bar-${id}`);
      if (section) observer.observe(section);
    }

    return () => {
      observer.disconnect();
      if (programmaticScrollTimeoutRef.current) {
        clearTimeout(programmaticScrollTimeoutRef.current);
      }
    };
  }, [barCategory?.subcategories]);

  useEffect(() => {
    if (!activeBarSubcategory) return;

    const activeTab = document.querySelector(
      `[data-bar-subcategory="${activeBarSubcategory}"]`,
    );

    if (!(activeTab instanceof HTMLElement)) return;

    const navList = activeTab.closest("ul");
    if (!(navList instanceof HTMLElement)) return;

    const tabLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.offsetWidth;
    const listWidth = navList.clientWidth;
    const targetScrollLeft = tabLeft - listWidth / 2 + tabWidth / 2;

    navList.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
    });
  }, [activeBarSubcategory]);

  const handleMainCategoryClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    categoryId: string,
  ) => {
    event.preventDefault();
    setActiveMainCategory(categoryId);
    activeMainCategoryRef.current = categoryId;

    if (categoryId === "bar") {
      const firstSubcategoryId = barCategory?.subcategories?.[0]?.id ?? null;
      setActiveBarSubcategory(firstSubcategoryId);
    } else {
      setActiveBarSubcategory(null);
    }

    scrollToCategory(categoryId);
  };

  const handleBarSubcategoryClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    subcategoryId: string,
  ) => {
    event.preventDefault();
    setActiveMainCategory("bar");
    setActiveBarSubcategory(subcategoryId);
    scrollToCategory(`bar-${subcategoryId}`);
  };

  return (
    <section
      ref={scrollContainerRef}
      className="relative h-[calc(100dvh-1rem)] w-full max-h-[calc(100dvh-1rem)] overflow-y-auto overscroll-contain rounded-xl border border-border bg-[radial-gradient(circle_at_top,_hsl(var(--card))_0%,_hsl(var(--background))_65%)] px-3 py-4 sm:h-auto sm:max-h-[min(90dvh,900px)] sm:rounded-2xl sm:px-6 sm:py-6 md:px-8"
    >
      <header
        ref={headerRef}
        className="sticky -top-4 lg:-top-8 z-40 -mx-3 flex flex-col gap-3 border-b border-border bg-background px-3 py-3 shadow-[0_8px_24px_hsl(var(--background))] sm:-mx-6 sm:gap-4 sm:px-6 sm:py-4 md:-mx-8 md:px-8"
      >
        <div className="relative px-10 sm:px-12">
          <h3 className="text-center text-2xl sm:text-4xl md:text-5xl font-heading font-semibold text-gradient leading-tight">
            Меню Пана
          </h3>
          <Button
            variant={"outline"}
            className="absolute top-1/2 right-0 h-9 w-9 -translate-y-1/2 rounded-full cursor-pointer sm:h-10 sm:w-10"
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </Button>
        </div>

        <nav className="rounded-xl border border-border bg-background/40 px-2 py-2 sm:px-3">
          <ul className="flex items-center justify-start sm:justify-center gap-x-3 sm:gap-x-4 gap-y-2 overflow-x-auto pb-1 text-sm sm:flex-wrap sm:overflow-visible sm:pb-0 sm:text-lg md:text-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {mainMenuCategories.map(({ id, title }: MainMenuCategory) => (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  className={`inline-flex min-h-10 items-center px-2 transition-colors ${
                    activeMainCategory === id
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={(event) => handleMainCategoryClick(event, id)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {activeMainCategory === "bar" && barCategory?.subcategories && (
          <nav className="rounded-xl border border-border bg-background/20 px-2 py-2 sm:px-3">
            <ul className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 text-xs sm:flex-wrap sm:overflow-visible sm:pb-0 sm:text-sm md:text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {barCategory.subcategories.map(({ id, title }: MenuCategory) => (
                <li key={id} className="shrink-0">
                  <a
                    href={`#bar-${id}`}
                    data-bar-subcategory={id}
                    className={`inline-flex min-h-9 items-center rounded-full px-2.5 py-1 transition-colors whitespace-nowrap ${
                      activeBarSubcategory === id
                        ? "bg-secondary/20 text-secondary font-medium"
                        : "text-foreground/70 hover:text-secondary"
                    }`}
                    onClick={(event) => handleBarSubcategoryClick(event, id)}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <div className="space-y-4">
        {mainMenuCategories.map(
          ({ id, items, subcategories }: MainMenuCategory) => (
            <section key={id} id={id}>
              {items && items.length > 0 && <MenuItemsList items={items} />}

              {subcategories?.map(
                ({ id: subId, title, items }: MenuCategory) => (
                  <section key={subId} id={`bar-${subId}`} className="mt-4">
                    <h5 className="pb-2 text-base sm:text-lg md:text-xl font-heading font-semibold text-foreground/90 text-center">
                      {title}
                    </h5>
                    <MenuItemsList items={items} />
                  </section>
                ),
              )}
            </section>
          ),
        )}
      </div>
    </section>
  );
}

function MenuItemsList({ items }: { items: MenuPosition[] }) {
  return (
    <ul className="space-y-2 mt-4 rounded-xl border border-border overflow-hidden">
      {items.map(
        ({ id: itemId, title, description, tags, price, amount, image }) => (
          <li
            key={itemId}
            className="flex flex-col gap-3 border-b border-border bg-background/30 px-3 py-3 last:border-b-0 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4 sm:px-4"
          >
            <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                  sizes="(max-width: 640px) 64px, 96px"
                  className="mt-0.5 h-14 w-14 rounded-md object-contain shrink-0 sm:h-20 sm:w-20 md:h-24 md:w-24"
                />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-xl md:text-2xl font-semibold leading-snug text-foreground">
                  {title}
                </p>
                {description && (
                  <p className="mt-1 text-xs sm:text-sm md:text-base text-muted-foreground">
                    {description}
                  </p>
                )}
                {tags && tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2 sm:pt-2">
                    {tags.map((tag) => (
                      <span
                        key={`${itemId}-${tag}`}
                        className="rounded-full border border-secondary/50 bg-secondary/15 px-2 py-0.5 text-[10px] sm:text-xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex shrink-0 flex-row items-center justify-between gap-3 border-t border-border/60 pt-2 sm:min-w-[96px] sm:flex-col sm:justify-center sm:self-stretch sm:border-t-0 sm:pt-0">
              {amount && (
                <span className="order-2 text-[10px] sm:order-1 sm:text-xs text-muted-foreground sm:text-center leading-none">
                  {amount}
                </span>
              )}
              <span className="order-1 rounded-full bg-primary/90 px-3 py-1 text-xs sm:order-2 sm:text-base md:text-lg font-semibold text-primary-foreground whitespace-nowrap text-center">
                {`${price} руб`}
              </span>
            </div>
          </li>
        ),
      )}
    </ul>
  );
}

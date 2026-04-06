"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  _index?: number;
  _visible?: boolean;
}

export function StaggerItem({ children, className, _index = 0, _visible = false }: StaggerItemProps) {
  return (
    <div
      className={cn(
        "transition-all duration-500 ease-out",
        _visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.97]",
        className
      )}
      style={{ transitionDelay: `${_index * 70 + 50}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let index = 0;
  const cloned = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === StaggerItem) {
      return React.cloneElement(child as React.ReactElement<StaggerItemProps>, {
        _index: index++,
        _visible: visible,
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {cloned}
    </div>
  );
}

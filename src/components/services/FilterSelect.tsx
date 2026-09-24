"use client";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown } from "lucide-react";
import styles from "./catalog.module.css";

export type FilterOption = { value: string; label: string; accent?: string };

/**
 * Selector de filtro del catálogo.
 *
 * Sustituye a un <select> nativo porque su lista desplegada la dibuja el
 * sistema operativo y no acepta el diseño del sitio. Sigue el mismo patrón de
 * disclosure que el menú del header: pointerdown fuera cierra, Escape cierra y
 * devuelve el foco al disparador, y el teclado recorre la lista.
 */
export default function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const id = useId();
  const listId = `${id}-lista`;
  const labelId = `${id}-etiqueta`;

  const selectedIndex = Math.max(0, options.findIndex(option => option.value === value));
  const selected = options[selectedIndex];

  const openList = (index = selectedIndex) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const closeList = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) trigger.current?.focus();
  };

  const commit = (index: number) => {
    onChange(options[index].value);
    closeList(true);
  };

  useEffect(() => {
    if (!open) return;
    list.current?.focus();
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openList(event.key === "ArrowDown" ? selectedIndex : options.length - 1);
    }
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex(current => (current + 1) % options.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex(current => (current - 1 + options.length) % options.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        commit(activeIndex);
        break;
      case "Escape":
        event.preventDefault();
        closeList(true);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div className={styles.field} ref={root}>
      <span className={styles.fieldLabel} id={labelId}>{label}</span>
      <div className={styles.select}>
        <button
          type="button"
          ref={trigger}
          className={styles.selectTrigger}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-labelledby={`${labelId} ${id}-valor`}
          onClick={() => (open ? closeList() : openList())}
          onKeyDown={onTriggerKeyDown}
        >
          {selected?.accent && <span className={styles.selectDot} style={{ background: selected.accent }} aria-hidden />}
          <span id={`${id}-valor`}>{selected?.label}</span>
          <ChevronDown className={styles.selectChevron} size={18} aria-hidden />
        </button>

        {open && (
          <ul
            ref={list}
            id={listId}
            className={styles.selectPanel}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={labelId}
            aria-activedescendant={`${id}-opcion-${activeIndex}`}
            onKeyDown={onListKeyDown}
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                id={`${id}-opcion-${index}`}
                role="option"
                aria-selected={option.value === value}
                data-active={index === activeIndex || undefined}
                className={styles.selectOption}
                onClick={() => commit(index)}
                onPointerMove={() => setActiveIndex(index)}
              >
                {option.accent && <span className={styles.selectDot} style={{ background: option.accent }} aria-hidden />}
                <span>{option.label}</span>
                {option.value === value && <Check size={16} aria-hidden />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

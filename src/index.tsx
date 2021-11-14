import React from "react";
import { useRef, useState } from "react";
import "./index.css";

type VirtualizedListProps<T extends Object> = {
  renderItem: (item: T, index: number) => React.ReactNode;
  getItemKey: (item: T) => React.Key;
  items: T[];
  itemHeight?: number;
  showNumberOfItems?: number;
  style?: React.CSSProperties;
};

export function VirtualizedList<T extends Object>({
  items,
  showNumberOfItems = 10,
  itemHeight = 50,
  renderItem,
  getItemKey,
  style,
}: VirtualizedListProps<T>) {
  const listTotalHeight = itemHeight * items.length;
  const listWindowHeight = itemHeight * showNumberOfItems;
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  return (
    <div
      onScroll={(e) => setScrollHeight((e.target as HTMLDivElement).scrollTop)}
      ref={listRef}
      className="virtualized-list-window"
      data-testid="virtualised-list-window"
      style={{ ...style, height: listWindowHeight }}
    >
      <div
        className="virtualized-list-inner"
        style={{ height: listTotalHeight }}
      >
        {items.map((item, i) => {
          const scrollWindowStartOffset = scrollHeight - itemHeight;
          const scrollWindowEndOffset =
            scrollHeight + listWindowHeight + itemHeight;

          const itemTopOffset = i * itemHeight;
          const isItemInScrollWindow =
            itemTopOffset >= scrollWindowStartOffset &&
            itemTopOffset < scrollWindowEndOffset;

          if (!isItemInScrollWindow) {
            return <React.Fragment key={getItemKey(item)}></React.Fragment>;
          }

          return (
            <div
              key={getItemKey(item)}
              className="virtualized-list-item"
              style={{ height: itemHeight, top: `${itemTopOffset}px` }}
            >
              {renderItem(item, i)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

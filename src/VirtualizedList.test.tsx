import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { VirtualizedList } from "./VirtualizedList";

describe("VirtualizedList", () => {
  test("it should render the items in the given scroll window", () => {
    const items = new Array(100).fill(0).map((_, i) => i);
    const container = render(
      <VirtualizedList
        items={items}
        renderItem={(_, i) => <>Test {i}</>}
        showNumberOfItems={10}
        getItemKey={(item) => item}
      />
    );

    const list = container.queryByTestId("virtualised-list-window");

    if (!list) {
      throw new Error();
    }

    fireEvent.scroll(list, {
      target: { scrollTop: 550 },
    });

    const visibleItem = list.querySelector(".virtualized-list-item");
    expect(visibleItem?.innerHTML.includes("Test 10")).toEqual(true);
  });
});

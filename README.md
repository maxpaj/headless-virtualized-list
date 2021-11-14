# virtualized-list

Efficiently renders very large lists, while keeping normal scrolling behaviour.

```
$ npm install --save @maxpaj/virtualized-list
```

```
function LargeList() {
    const items = new Array(1000000).map((_, i) => i);

    return <VirtualizedList<number>
        style={{ width: "100%" }}
        items={items}
        getItemKey={(item) => item}
        renderItem={(item) => <p>{item}</p>}
    />
}
```

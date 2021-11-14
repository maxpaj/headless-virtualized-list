# virtualized-list

```
npm install --save @maxpaj/virtualized-list
```

# Usage

```
<VirtualizedList<string>
    style={{ width: "100%" }}
    items={items}
    getItemKey={(item) => item}
    renderItem={(item) => <p>{item}</p>}
/>
```

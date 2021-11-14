# virtualized-list

`npm install --save @maxpaj/virtualized-list`

# Use

```
<VirtualizedList<string>
    items={items}
    getItemKey={(item) => item}
    renderItem={(item) => <p>{item}</p>}
/>
```

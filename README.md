# c-loading-place-holder
[TOC]

a *light-weight* & *easy-to-use* loading place holder for lwc:zap: components​​.

**Features**

- show a sldc-like place holder wherever you want
- custom number of rows

## Documentation

### Getting Started

1. Deploy this component to your Org

   copy the whole **loadingPlaceHolder** folder in ..\src\main\default\lwc

   to your project's lwc folder. Run the 'Deploy Source to Org' command.
   
2. Refer the component inside a parent component, set the row number for the place holder.

   ```html
   <c-loading-place-holder row-number="3"></c-loading-place-holder>
   ```
   
3. Deploy the parent component to see the effort.



### Recommend Use Case

I use this component while loading a large component, so it is recommended to control the display of the component using ```<template if:false={loaded}>...</template>```.

Here is an example:

```html
<template if:false={loaded}>
    <c-loading-place-holder row-number="3"></c-loading-place-holder>
</template>
<template if:true={loaded}>
	<!-- contents of your component -->
</template>
```

```js
@track loaded = false
@wire(getRecords, {})
wiredRecords({error, data}) {
	// your codes...
	this.loaded = true
}
```

You can also set the `loaded` flag to true inside a ```onload``` hook function while using ```lightning-record-edit-form``` such so the form is showed after the form is loaded.

## Reference

### Attributes

| Attribute   | Type     | Description                                    | Default |
| ----------- | -------- | ---------------------------------------------- | ------- |
| `rowNumber` | `Number` | How many rows of place holder you want to show | `3`     |

made by F.O. with :heart:
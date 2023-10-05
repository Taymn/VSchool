## React Fragments
```js
<></>
```
- simplifies DOM tree
- change relationship of DOM elements between components: children/grandchildren become siblings 
- wraps returned elements in non DOM element

```js
<div id="root">
    <div>
        <div>
            <h1>I'm the Child component</h1>
            <div>
                <hr>
                <h3>I'm the Grandchild component</h3>
                <p>I'm also a part of the Grandchild component</p>
            </div>
        </div>
    </div>
</div>
```
becomes:

```js
<div id="root">
    <h1>I'm the Child component</h1>
    <hr>
    <h3>I'm the Grandchild component</h3>
    <p>I'm also a part of the Grandchild component</p>
</div>
```

## Code Reuse

- Don't
- Repeat
- Yourself

Inheritance: what they are, object orientated programimg. Has limitations. "Is a..."

## FAVORED ##
Composition: what they can do, design for purpose. "Has a..."

1. Components w/ props
2. Children
3. High-ordered Components
4. Render props

## React Children

Compents can be created as self closing element or non self closing. Anything inside NSC element is treated as a child of that element.

self closing: 
```js
<NAv />
```

NSC : 
```js
export default function App(){
    return(
        <div>
            <Nav>
                <h1>
                DOM Elements receive CSS through props.children
                </h1>
                <button>
                Button's too
                </button>
            </Nav>
        </div>
    )
}
```
CSS:
```js
.border {
    border: 1px solid blue;
    border-radius: 5px;
}
```

```js
export default function Nav(props){
    return (
        <div className="border">
            {props.children}
        </div>
    )
}
```
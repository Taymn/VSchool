
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
    <div>
        <p>element 1</p>
        <ul>
            <li>element 2</li>
            <li>element 3</li>
            <li>element 4</li>
        </ul>
    </div>

)
//  document.getElementById("root").append(JSON.stringify(page))

 /**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

ReactDOM.render(page, document.getElementById("root"))
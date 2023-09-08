/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// function Page() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="./react-logo.png" width="40px" />
//                 </nav>
//             </header>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
  - Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
  - Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

// import React from "React"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


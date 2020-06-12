<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
*   I understand the words stating the problem
*   I'm asked to show a basic online shop with a cart page
*   I'm using Micro Center's site as a general guide, and I can picture it in my head
*   I can only hope there's enough information, I'm not very experienced with React yet
<h2>
    2. Planning the Solution
</h2>
*   First I devise a vector mockup with Adobe XD to have something to work to, using Micro Center's website as a guide
*   Next I initialize the react project with the command and start formatting it
*   I'll try to make it in one file for simplicity and debugging before refactoring the project into multiple files
*   There are many unknowns but I hope to research them all individually online
*   I'll likely be using Material UI for styling
<h2>
    3. Executing the Plan
</h2>
*   My first step was creating the JSON file and populating it with 12 objects, each representing an electronic product
*   My home page was in the App.js file during the first phase
*   I created a navbar and grid style for the items
*   Once I wanted to implement the cart, I refactored the code to spread across multiple pages
*   The Items grid and Navbar were seperate pages, and allowed the Navbar to be static
*   I only needed to pass a cart array to the new cart page, from there it was all about styling the paragraphs with CSS
*   Finally I added PayPal functionality with a basic React installation
<h2>
    4. Reflection / Refactor
</h2>
*   I think the functionality lives up to my expectations for the most part, except for updating the values in the cart which takes multiple button presses for seemingly no reason.  If I knew more about arrow functions and useState I might understand why.
*   There were a couple days I had trouble creating the cart element because I didn't realize it needed to be a seperate file to render by itself
*   I also had trouble occasionally with prop drilling and scope, if I had time to refactor the functions into context files that would help
*   I didn't have much functioning knowledge about React going into the project, but now I can more easily start off with multiple files going forward
*   There were a few features I wasn't able to implement in time, including alerts and adding quantities of items to the cart.  If I had been able to troubleshoot my problems quicker that might have been possible.
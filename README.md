## Synopsis

You’ve been asked to develop a responsive website for a clothing retailer.

The retailer sells six different categories of clothes: women’s footwear, men’s
footwear, women’s casualwear, men’s casualwear, women’s formalwear and
man’s formalwear.

The page that you develop should display all of the available products, as well
as a shopping cart to which they can be added.

## Motivation
I opted to use vanilla javascript for my models with a minimal server running the code via Express. Whilst heavier frameworks could have sped up and simplified the process, they would not have shown as true a reflection of my ability to program.

My primary focus was on the back-end, and getting the correct models and logic setup for this. This is where my primary interest in programming lies, and where I get the most enjoyment from. The 3 model files are located in client/src/basket. I like to focus on simplicity when creating my models, and so I opted to only create basket.js, item.js and voucher.js. Thinking through the logic of these models, creating them and testing them took approximately 2 hours.

Once I was satified that the models worked correctly, I began to build out the file structure around them, and connected them up to a simple HTML page to display them. I then populated an items.json file using images obtained through google image search along with the data provided in the test instructions.

In the expected timeframe of 3 - 5 hours, this is as far as I have gotten with the project. I have not yet connected the models to the view through a controller, nor have I created an attractive, responsive layout. Whilst these are obviously key tasks, I have focused primarily on creating functional models which I view as being the most critical part of the project.

With additional time I would have linked the models up the the view using the priorities given in the user stories. I would then have used a responsive CSS grid to display the items, setting a number of breakpoints to ensure that it would work well across a range of devices and screen sizes. The basket would have been hidden at the top of the screen until the user added an item to it, and which point it would push the rest of the content further down the screen and allowed the user to view the items in the basket along with their total.

## Installation

Provide code examples and explanations of how to get the project.
To run the code:
1) Clone the repository: git clone https://github.com/istewart13/front_end_case_study<br>
2) Navigate to: front_end_case_study<br>
3) Run: npm install<br>
4) Run: npm start

## Tests

1) Navigate to: front_end_case_study/client/src/basket
2) Run: npm install mocha
3) Run: npm test

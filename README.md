# The Good Life Retirement Tracker

![Screenshot of account page](https://github.com/rrcheatham/retirement-calc-client/blob/master/screenshot.PNG)

*website: https://arcane-taiga-47013.herokuapp.com/*

This is a retirement tracker app that allows users to target the amount they need for 
retirement and track or adjust their savings to meet that goal.

Upon logging in **(username: email@email.com, password: password1234 - Please enable cookies!)**, a user has access to an inputs section, a target section, and a results section.

## Inputs

At the top of the page are six inputs:

    1. The user's current age
    2. The user's yearly income
    3. The amount the user currently has saved for retirement
    4. The yearly % of salary the user contributes to his or her retirement savings
    5. The age at which the user wishes to retire
    6. The planned annual expenses (in today's dollars) the user expects in retirement

### New Users

New users can register on the home page by providing their email, first name, last name, and a password. When this data is submitted successfully, users are taken to a dashboard where they are
presented with intial inputs that are mostly zeros. A user can then edit these inputs based on
his or her own information and targets. This inputs are saved once submitted and can be accessed
any time the user logs back into the app.

### Target and Status

Once a user submits his or her inputs, target and actual retirement totals are calculated an presented in a graph below the inputs. Based on the difference between projected and target retirement savings, a status is displayed ("On track", "Almost There", "Needs work", or "In trouble") along with a graph showing the targeted total vs. projected total. Each time the inputs are submitted these values are recalculated along with the details panel at the bottom of the app.

## Details

Below the target graph is a section that displays three important pieces of information:
  1. The total amount a user is short of his or her retirement target
  2. The additional annual $ savings a user needs to meet the target
  3. The percentage of current salary this additional annual savings equals

## Assumptions

There are a few assumptions this app makes in order to come up with the calculations a user sees:
  1. Plans for a life expectency of 90, in other words the number of years the retirement savings needs to cover
  2. Assumes a 2% increase in currently salary each year
  3. Assumes an annual return of 5% (the avg return on the S&P 500 for the last 30 years)
  4. 3% annual inflation
  5. That return on investment in retirement will equal, but not exceed, inflation

## Technology Used

This app utilizes HTML, CSS, Javascript, React, Redux, Redux Form, Recharts, Numeral, and JWT decode for the client-side features.

The server-side utilizes javascript, Node, Express, MongoDB & Mongoose, morgan, body-parser, and cors for Restful API construction. Passport, bcryptjs, jsonwebtoken
are used for JWT tokenization.

For testing, chai, chai-http, faker, mocha, and enzyme 
are used. 
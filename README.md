# Welcome to DressSwap!

Inspired by Depop, Poshmark, and other clothing marketplaces, DressSwap aims to be a tool for former, current, and future bridesmaids that are burdened with the responsibility of the dress specified by the brain for whom they...maid. For former bridesmaids, DressSwap is a place to list the dress they wore on that special day that has since hung in the closet, unworn and resented for taking up valuable real estate. For current bridesmaids, this app provides a space for them to browse what is available and maybe even save a few bucks on a dress they'll never wear again.

## Technologies Used

DressSwap is a CRUD app; the backend is built with Django and Python, and the front with React (using React Router for navigation) that allows the user to manipulate a database of bridesmaid dresses. The user can add new dresses, edit and delete a dress they've added, and add other dresses to a wishlist.

## Limitations

The wishlist only works for the current session. I need to develop my understanding of Auth0's user permissions and sessions, set up a new model for a wishlist, or a lot of both. Furthermore, I have not established what users are allowed to edit. Due to Auth0 issues, I have not been able to make multiple accounts function.

The Auth0 implementation behaves inconsistently - The deployed version proved to be more problematic.

Without any eCommerce functionality, the site simply doesn't do much more than a basic CRUD app. Spending so much time on Auth0 and React Router issues left less time for styling than I would have liked.

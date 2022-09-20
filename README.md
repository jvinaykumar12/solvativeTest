#Getting Started
1. npm i
2. npm start

#problem Statement
A button to create new review - clicking on which user will be redirected to /new/ route
Basic Table layout with all reviews
Table should have 6 columns: #, Title, Content, Date-time, Edit, Delete
# - Static count number starting with 1
Edit - a edit button, clicking on which user will be redirected to /:id route
Delete - a delete button, clicking on which review will be deleted
Show each review in separate row
Latest review should be displayed first
This should be a live list view with implementation of web-socket, so whenever any review is added/edited/deleted, it should immediately update the table without user needing to refresh the page
New Review (route = /new)
1 input for title
1 textarea for content
Save button - saves the review, and redirects user back to list view, i.e. route /
Reset button - resets the review content and title
Cancel button - redirects user back to list view, i.e. route /
Edit Review (route = /:id)
Re-use the same component from New Review
Pre-fill the title and content from the existing review
Delete button - deletes the review, and redirects user back to list view, i.e. route /

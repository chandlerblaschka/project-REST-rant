# Project REST-Rant

REST-Rant is an app where users can view restaurants.

| Method | Path | Purpose |
| :---: | :--- | :--- |
| GET | `/` | Home Page |
| GET | `/places` | Places Index Page |
| POST | `/places` | Create a New Place |
| GET | `/places/new` | Form Page for Creating a New Place |
| GET | `/places/:id` | Details About a Particular Place |
| PUT | `/places/:id` | Update a Particular Place |
| GET | `/places/:id/edit` | Form Page for Editing an Existing Place |
| DELETE | `/places/:id` | Delete a Particular Place |
| POST | `/places/:id/rant` | Create a RANT (comment) About a Particular Place |
| DELETE | `/places/:id/rant/:rantId` | Delete a RANT (comment) About a Particular Place |
| GET | `*` | 404 Page (matches any route not defined above) | 


1. Bookmarked Github Documentation for [Basic Formatting Syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
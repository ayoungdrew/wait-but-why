https://ayoungdrew.github.io/wait-but-why-client/

API repo: https://github.com/ayoungdrew/wait-but-why-api
Heroku App: https://wait-but-why-api.herokuapp.com/

![A test image](https://res.cloudinary.com/duqjlnkij/image/upload/v1524224049/wait-but-why-screenshot.png)

# Wait But Why

The planning process started out with me thinking on what I could improve on from what I learned with my Life Soundtrack project which greatly benefitted from the handlebars component system that Ember also employs. I figured another journaling/blogging type app would be fun to explore.

I quickly realized that this could easily segue into building an app with a social media aspect to it which was exciting as it could continue blossoming into a bigger project for me in the future. A big aspect was getting the database right. I was rusty on rails so sought youtube to get a refresher. Luckily it turns out blog posts and comments are a problem people solve often. Taking advice from my instructors this time I choice to aim for mostly MVP requirements first, so CRUDing functionality for event resources came first.

Getting a handle on how EmberJS set up resource relationships and attribute types was a big hurdle and slowed me down quite a bit. While I had aspirations to incorporate some extra front-end packages like D3 and CSS animation libraries I had to prioritize basic UI functionality to reach MVP in time. All in all a successful process and great learning experience

# API End Points
| Verb   | URI Pattern                 | Controller#Action         |
|--------|-----------------------------|---------------------------|
| POST   | `/sign-up`                  | `users#signup`            |
| POST   | `/sign-in`                  | `users#signin`            |
| DELETE | `/sign-out`                 | `users#signout`           |
| PATCH  | `/change-password`          | `users#changepw`          |
| PATCH  | `/users/:id`                | `users#update`            |
| GET    | `/events`                    | `events#index`             |
| POST   | `/events`                    | `events#create`            |
| GET    | `/events/:id`                | `events#show`              |
| PATCH  | `/events/:id`                | `events#update`            |
| DELETE | `/events/:id`                | `events#destroy`           |
| GET    | `/comments`                    | `comments#index`             |
| POST   | `/comments`                    | `comments#create`            |
| GET    | `/comments/:id`                | `comments#show`              |
| PATCH  | `/comments/:id`                | `comments#update`            |
| DELETE | `/comments/:id`                | `comments#destroy`           |


# Technologies Used

EmberJS
Ruby on Rails
JavaScript
jQUERY
AJAX
HTML5
SASS/CSS3
Handlebars
Bootstrap
GIT/GITHUB
Atom
Webpack

# Usage info
Make sure to NPM install!

# Future Iterations
Friends list
Profile picture upload
Search functionality by tag, name, etc.
Graphical/UI improvements


# Wireframes and ERD
https://drive.google.com/open?id=1Yguw6LsUMAqTYJrt12DuG8E67lT2w4WT

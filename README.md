# Full-Stack App "Color4Kids" (Nest, postgreSQL, Vue/React)

## Motivation
Since I wanted to utilise the advantages of building the server-side on a relational database, I built the backend for the coloring API using RESTful API with ExpressJS and PostgreSQL in May 2022. I never built the client-side to consume the endpoints served though.

Now I want to implement a full-stack app and this way further develop my skills as a full-stack web developer. That is why I want to build the backend and frontend from scratch - despite an existing backend. This is the tech I decided on:

#### Frontend
HTML, TypeScript, Vue.js or React, CSSTailwind
#### Backend
TypeScript, Nestjs, GraphQL, PostgreSQL


## Objective

The objective of this project is to build a full-stack app, which allows users to print out images from children movies for coloring. Therefore, the app displays a list of animated movies, which can be filtered by title or by specific key-words. The selected images can then be printed or downloaded.At a later stage a login will be added, so that authorized users can upload images.


## User Stories

As a user, I want to be able to see a list of children cartoons and filter them, so that I can find the ones I am interested in.

As a user, I want to see a list of pictures from one cartoon and filter them, so that I can choose which pictures I want to print.

As a user, I want to print out a picture directly or download it to my local device, so that I can color it.

As a user, I want the pictures I already printed out to be marked, so that I have an overview, which pictures I already printed or downloaded.


#### Bonus (later project stage)

As a user, I want to create a profile, so that I can save my favorite pictures to my profile and link to my favorite cartoons.

As a user, I want to mark a cartoon as my favorite, so that it appears at the top of the cartoon movie list.

As a user, I want to upload pictures I drew about certain children cartoons, so that they are added to the list of pictures.

## Features and Acceptance Criteria

The feature requirements below were extracted from the user stories listed above.

#### Main view
* Returns a list of cartoons (each listed item with titles and an exemplary cartoon picture)s
* Sorting and filtering
* Ability to mark a cartoon as favorite

#### Single movie/cartoon view
* Returns an introductory cartoon picture with title and one-sentence synopsys
* Returns a list of pictures from one single cartoon (each containing a button for direct printing or download)
* Filtering
* Automatic mark as downloaded/printed


## Further Information

<details>
  <summary>Click to expand!</summary>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


</details>
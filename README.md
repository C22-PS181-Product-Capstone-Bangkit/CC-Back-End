# RESTful API Cemil: Choose Your Meal

### Description
API control system to help mobile development projects in the process of authentication and getting restaurant data, reviews, and likes.

For API Documentation: [Postman Document](https://documenter.getpostman.com/view/21194253/Uz5CKxWc)

### Tools
* [PostgreSQL](https://www.postgresql.org/)
* [Node js v16.11.1](https://nodejs.org/)
* [NPM v8.10.0](https://www.npmjs.com/) (packaged by Node js)
* [Postman](https://www.postman.com/) (testing API)


### Instructions

* Clone this repo

* Navigate your cloned project on your directory

* Install package

```bash
 npm install
```

* Create **.env** copy from file **.env.example** and make sure connection for URL Database is can be remote by Back End (For Connection check: [Connection URIs](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING))

* Run migration

```bash
 npm run db:migrate
```

* Run data seeder for content restaurant and review

```bash
 npm run db:seed
```

* Run the app locally (production)

```bash
 npm run start
```

**Expected Output**

```console
> cc-back-end@1.0.0 start
> node src/app

App running on http://localhost:3000
```
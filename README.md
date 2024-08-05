# Blog App Backend <img src="https://em-content.zobj.net/source/apple/391/luggage_1f9f3.png" width="35" />

## Project Overview

The **Blog App Backend** is designed to provide API endpoints for managing blog posts. It utilizes Express.js for server-side operations, MongoDB for data storage, and Swagger for API documentation. The backend supports CRUD operations for blog posts and includes middleware for validation and error handling.

## [API LINK](https://blog-app-backend-pwob.onrender.com)

### API Endpoints <img src="https://em-content.zobj.net/source/apple/391/link_1f517.png" width="25" >

1. **GET /posts**: Retrieve all blog posts.
2. **GET /posts/:id**: Retrieve a single blog post by ID.
3. **POST /posts**: Create a new blog post.
4. **PUT /posts/:id**: Update a blog post by ID.
5. **DELETE /posts/:id**: Delete a blog post by ID.

### Blog Post Model <img src="https://em-content.zobj.net/source/apple/391/card-file-box_1f5c3-fe0f.png" width="25" >

Each blog post includes the following fields:
- `id`: Unique identifier for the post.
- `title`: Title of the post.
- `content`: Content of the post.
- `author`: Author of the post.
- `createdAt`: Timestamp when the post was created.

### Swagger <img src="https://em-content.zobj.net/source/apple/391/page-facing-up_1f4c4.png" width="25" >

## [SWAGGER LINK](https://blog-app-backend-pwob.onrender.com/api-docs/)

Swagger documentation is provided to describe the structure of the API endpoints.

### Express Setup <img src="https://em-content.zobj.net/source/apple/391/gear_2699-fe0f.png" width="25" >

- **Server Setup**: Express is used to set up the server and define routes.
- **Logging**: logging is used for error notification.

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ViktorBykh/blog-app-backend.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd blog-app-backend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the server**:
    ```bash
    npm run dev
    ```

## Scripts

- **Test**: `npm test`
- **Serve**: `npm run serve`
- **Development**: `npm run dev`
- **Lint**: `npm run lint`
- **Lint Fix**: `npm run lint:fix`

## Dependencies <img src="https://em-content.zobj.net/source/apple/391/gear_2699-fe0f.png" width="25" >

- **@antfu/eslint-config**: ^2.24.1
- **body-parser**: ^1.20.2
- **cors**: ^2.8.5
- **dotenv**: ^16.4.5
- **eslint-plugin-tailwindcss**: ^3.17.4
- **express**: ^4.19.2
- **log4js**: ^6.9.1
- **mongoose**: ^8.5.2
- **nodemon**: ^3.1.4
- **swagger-jsdoc**: ^6.2.8
- **swagger-ui-express**: ^5.0.1

## Dev Dependencies <img src="https://em-content.zobj.net/source/apple/391/test-tube_1f9ea.png" width="25" >

- **@eslint/js**: ^9.8.0
- **chai**: ^5.1.1
- **eslint**: ^9.8.0
- **eslint-plugin-react**: ^7.35.0
- **globals**: ^15.9.0
- **mocha**: ^10.7.0
- **supertest**: ^7.0.0
- **typescript-eslint**: ^8.0.0

## Testing <img src="https://em-content.zobj.net/source/apple/391/microscope_1f52c.png" width="25" >

The project includes tests for the API endpoints. The tests are written using Mocha, Chai, and Supertest.

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

Sample output:

```
  post Controller
    ✔ should get all posts (287ms)
    ✔ should get a post by id (39ms)
    ✔ should update a post (44ms)
    ✔ should delete a post
    ✔ should return 404 for non-existing post

  5 passing (909ms)
```

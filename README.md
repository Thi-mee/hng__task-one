# Express.js Endpoint Project

Welcome to the Express.js Endpoint Project! This project demonstrates how to create and host an endpoint that accepts GET requests with specific query parameters and returns information in JSON format. It's designed as a learning exercise and can serve as a starting point for building more complex Express.js applications.

## Table of Contents

- [Objective](#objective)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Objective

The main objective of this project is to create a publicly accessible Express.js endpoint that fulfills the following requirements:

- Accepts two GET request query parameters: `slack_name` and `track`.
- Returns a JSON response containing specific information, including the Slack name, current day of the week, current UTC time, track, GitHub file URL, GitHub repository URL, and a status code of 200.

## Requirements

Before you start using the endpoint, make sure you have the following dependencies installed:

- Node.js
- Express.js

## Getting Started

### Prerequisites

To run this project, you need to have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website: [Node.js](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/thi-mee/hng__task-one.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hng__task-one
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

To run the Express.js endpoint, use the following command:

```bash
npm start
```

The endpoint will be accessible at `http://localhost:3000/api` by default.

## Endpoints

- **GET /api**: The main endpoint that accepts two query parameters (`slack_name` and `track`) and returns a JSON response with the specified information.

Example Usage:
```http
GET http://localhost:3000/api?slack_name=example_name&track=backend
```

## Testing

Before submission, it's essential to test the endpoint:

1. Ensure the endpoint is accessible by visiting `http://localhost:3000/api` in your web browser or using a tool like Postman.
2. Check the returned JSON response against the defined format in the project requirements.
3. Validate the correctness of each data point in the JSON response.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push your changes to your fork: `git push origin feature/new-feature`.
5. Create a pull request to the main repository.

Please ensure that your code adheres to the project's coding standards and conventions.

## License

This project is licensed under the MIT License
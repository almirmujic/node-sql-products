# SQL Node React

Practice creating, adding, deleting, and displaying products from a relational database using React on the client side

### pre-requisites
- node installed
- mysql installed and configured ([helpful guide](https://dev.mysql.com/doc/refman/8.0/en/installing.html))

## Installation
Clone the repository

Install live server dependencies using

```bash
npm install
```
Change into the client directory and install client side dependencies
```bash
cd ./client
npm install
```

Change directory back into node-sql-products and create a .env file
```bash
touch .env
```
Set up environmental variables in the .env file
```env
DB_USER = databaseUsername
DB_PASS = databasePassword
DB_NAME = databaseName
```

## Usage
Launch live server using
```bash
npm run dev
```

Launch client environment using
```bash
cd ./client
npm run start
```

Run client tests using
```bash
npm run test
```
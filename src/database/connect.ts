import { createConnection } from "typeorm";

createConnection().then(() => console.log('Soccessfully connected with database'));
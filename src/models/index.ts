import { Sequelize } from "sequelize";
import { VerseFactory } from "./verse";
import { UserFactory } from "./user";
import { JournalFactory } from "./journal";
import { SermonFactory } from "./sermon";

const dbName = 'team_data_dawgs';
const username = 'team_data_dawgs';
const password = 'DawgsPwd01';

const sequelize = new Sequelize(dbName, username, password, {
    host: '207.244.251.209',
    port: 3306,
    dialect: 'mysql'
});

VerseFactory(sequelize);
JournalFactory(sequelize);
UserFactory(sequelize);
SermonFactory(sequelize);

export const db = sequelize;
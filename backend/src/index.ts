import "reflect-metadata";
import express from 'express';
import { DataSource } from 'typeorm';
import cors from 'cors';
import { Personnel } from './entities/Personnel';
import { Unit } from './entities/Unit';
import { Skill } from './entities/Skill';
import { Deployment } from './entities/Deployment';
import { TrainingRecord } from './entities/TrainingRecord';
import { Award } from './entities/Award';
import { DisciplinaryRecord } from './entities/DisciplinaryRecord';
import { Equipment } from './entities/Equipment';
import personnelRoutes from './routes/personnel.routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Database connection setup
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "iaf_hms",
  synchronize: true, // WARNING: In production, use migrations instead of synchronize: true
  logging: false,
  entities: [Personnel, Unit, Skill, Deployment, TrainingRecord, Award, DisciplinaryRecord, Equipment],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.get('/', (req, res) => {
  res.send('IAF HMS Backend is running!');
});

app.use('/api/personnel', personnelRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
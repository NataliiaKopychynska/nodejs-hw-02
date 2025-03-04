import 'dotenv/config';

import app from './app.js';
import { initDatabaseConnection } from './db.js';

const PORT = process.env.PORT || 9090;

async function bootstrap() {
  try {
    await initDatabaseConnection();
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

bootstrap();

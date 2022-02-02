import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// For Parsing error: Cannot read file '.../tsconfig.json'.eslint:
// To fix this, you can set tsconfigRootDir to __dirname,
// which would make the parser resolve the project configuration relative to .eslintrc.js:

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log('server running on http://localhost:3001');
}
bootstrap();

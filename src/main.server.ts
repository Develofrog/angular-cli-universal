import 'zone.js/dist/zone-node';
import './polyfills';

import 'reflect-metadata';
import 'rxjs/Rx';

import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';
import { ngExpressEngine } from './app/ng-express-engine/express-engine';

import * as express from 'express';
import { App } from './api/app';
import { ROUTES } from './routes';

const port = 8000;
const baseUrl = `http://localhost:${port}`;

const app = express();
const api = new App();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', 'dist');

app.get('/', (req, res) => {
  res.render('index', {req});
});

app.use('/', express.static('dist', {index: false}));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    // tslint:disable-next-line:no-console
    console.time(`GET: ${req.originalUrl}`);
    res.render('index', {
      req: req,
      res: res
    });
    // tslint:disable-next-line:no-console
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.get('/data', (req, res) => {
  // tslint:disable-next-line:no-console
  console.time(`GET: ${req.originalUrl}`);
  res.json(api.getData());
  // tslint:disable-next-line:no-console
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});

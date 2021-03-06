const express = require('express');
const serveStatic = require('serve-static');
// const Koa = require('koa');
//
// const app = new Koa();
// const serve = require('koa-static');

const app = express();
app.use(serveStatic(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

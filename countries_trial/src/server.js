import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import notFound from './components/notFound';

const app = new Express();
const server = new Server(app);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../views/pages'));

app.use(Express.static(path.join(__dirname,'static')));

app.get('*', (req,res) => {
    match(
        {routes, location: req.url},
        (err, redirectLocation, renderProps) => {
            if(err) {
                return res.status(500).send(err.message);
            }

            if(redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            let markup;
            if(renderProps) {
                markup = renderToString(<RouterContext {...renderProps}/>);
            } else {
                markup = renderToString(<notFound/>);
                res.status(404);
            }

            return res.render('home',{ markup });
        }
    );
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if(err) {
        return console.error(err);
    }
    console.info('Server running on http://localhost:'+port );
});
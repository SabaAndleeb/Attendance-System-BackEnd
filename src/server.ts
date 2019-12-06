import app from './app';
import * as http from 'http';
import { PORT } from './config/config';

http.createServer(app).listen(process.env.PORT || PORT , () => {
    console.log('Express server listening on port '+ PORT);
});



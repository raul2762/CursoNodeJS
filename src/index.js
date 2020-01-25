const http = require('http')
const myLog = require('./modules/my-log');
const { countries } = require('countries-list');
const url = require('url');
const queryString = require('querystring')

var server = http.createServer(function (req,res){
    
    var parsed= url.parse(req.url);
    const pathname = parsed.pathname;
    var query = queryString.parse(parsed.query)
    console.log(query);    

    if (pathname === '/') {
        res.writeHead(200,{'content-Type': 'text-html'});
        res.write('<html><body><p>Hola desde NodeJS</p></body></html>');
        myLog.info('peticion correcta!');
        res.end();
    }
     else if (pathname === '/exit') {
        res.writeHead(200,{'content-Type': 'text-html'});
        res.write('<html><body><p>Hola desde Pagina Exit</p></body></html>');
        myLog.info('peticion correcta!');
        res.end();
    }
    else if (pathname === '/contry') {
        res.writeHead(200,{'content-Type': 'application/json'});
        res.write(JSON.stringify(countries[query.code]));
        myLog.info('peticion correcta!');
        res.end();
    }
    else {
        res.writeHead(404,{'content-Type': 'text-html'});
        res.write('<html><body><p>Pagina no encontrada</p></body></html>');
        myLog.error('peticion imncorrecta!');
        res.end();
    } 
    
});

server.listen(4000);

console.log('Corriendo en el puerto 4000')

/* function suma(num1,num2) {
    return num1 + num2;
}

console.log(suma(24,56)) */
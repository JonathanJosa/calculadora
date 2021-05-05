const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/' , (req, res, next) => {
	res.send('Bienvenido!');
});

app.get('/suma', (req, res, next) => {
	let num1 = req.query.n1;
	let num2 = req.query.n2;
	let resul = parseFloat(num1) + parseFloat(num2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/resta', (req, res, next) => {
	let num1 = req.query.n1;
	let num2 = req.query.n2;
	let resul = parseFloat(num1) - parseFloat(num2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/division', (req, res, next) => {
	let num1 = req.query.n1;
	let num2 = req.query.n2;
	let resul = parseFloat(num1) / parseFloat(num2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/multiplicacion', (req, res, next) => {
	let num1 = req.query.n1;
	let num2 = req.query.n2;
	let resul = parseFloat(num1) * parseFloat(num2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/potencia', (req, res, next) => {
	let num1 = req.query.n1;
	let num2 = req.query.n2;
	let resul = Math.pow(parseFloat(num1), parseFloat(num2));
	console.log(resul);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});


app.get('/sin', (req, res, next) => {
	let num1 = req.query.n1;
	let resul = Math.sin( parseFloat( num1 ) );
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});


app.get('/cos', (req, res, next) => {
	let num1 = req.query.n1;
	let resul = Math.cos(parseFloat(num1));
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});


app.get('/tan', (req, res, next) => {
	let num1 = req.query.n1;
	let resul = Math.tan(parseFloat(num1));
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.listen(port, () =>
	console.log("Puerto de ejecucion: " + port)
);

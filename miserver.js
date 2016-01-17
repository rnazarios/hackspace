var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


	
	var generarUsuario = function(){
		var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomImage = faker.image.avatar();
	

	return 	{ 	
		nombre: randomName,
		email: randomEmail,
		imagen: randomImage		
	}

}
var generarUsuario2 = function(){
		var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomImage = faker.image.avatar();
	var randomId = faker.random.uuid();
	var randomFecha = faker.date.past();
	var randomDesc = faker.lorem.sentence();

	return 	{ 		
		id: randomId,
		nombre: randomName,
		Contenido: randomDesc,
		fecha: randomFecha,
		imagen: randomImage		
	}

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/perfil', function (req, res)
{
res.send('Mi perfil');
})

app.get("/friends", function (req, res)
{
	var cantidad = _.random(5,10);
	var usuarios = _.times(cantidad, generarUsuario);
	res.json(usuarios);

})
app.get("/posts", function (req, res)
{
	var cantidad = _.random(5,10);
	var usuarios = _.times(cantidad, generarUsuario2);
	res.json(usuarios);

})


app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})

app.listen(3000);
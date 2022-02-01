// Директива use strict.
'use strict';
// Импорт модели
const Game = require('../models/gamemodel');

// Добавление документа в MongoDB
exports.gamecreate = function (req, res) {
    if(!req.body) return res.sendStatus(400);
    const gameName = req.body.name;
    const gameCategory = req.body.category;
	const gameDescr = req.body.descr;
	const gameAge = req.body.age;
    const game = new Game({name: gameName, category: gameCategory, descr: gameDescr, age: gameAge});
    game.save(function(err){
        if(err) return console.log(err);
		res.send(game);
    });
};
// Чтение документов
exports.gameread = function (req, res) {
    Game.find({}, function(err, games){
        if(err) return console.log(err);
        res.send(games)
    });
};
 // Чтение документа по id
exports.gamereadid =  function(req, res){
    const id = req.params.id;
    Game.findById(req.params.id, function(err, game){
        if(err) return console.log(err);
        res.send(game);
    });
};
 // Удаление документа 
exports.gamedelete = function(req, res){
    const id = req.params.id;
    Game.findByIdAndDelete(id, function(err, game){
        if(err) return console.log(err);
        res.send(game);
    });
};
 // Обновление документа   
exports.gameput = function(req, res){
    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
	const gameName = req.body.name;
    const gameCategory = req.body.category;
	const gameDescr = req.body.descr;
	const gameAge = req.body.age;
    const newGame = {name: gameName, category: gameCategory, descr: gameDescr, age: gameAge};
    Game.findOneAndUpdate({_id: id}, newGame, {new: true}, function(err, game){
        if(err) return console.log(err); 
        res.send(game);
    });
};
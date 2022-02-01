// Директива use strict.
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Определяем схему сo свойствами 
const gameSchema = new Schema({
    name: Date,
    category: Date,
    descr: Number,
    age: String
}, {versionKey: false});
// Создаем модель, с помощью которой на основе gameSchema создаем документы 
// Экспортировать модель
const Game = module.exports = mongoose.model('Game', gameSchema);
// директива use strict.
'use strict';
const express = require('express');
const router = express.Router();
// Подключаем модуль body-parser.
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// Импорт контроллеров
const gamecontroller = require('../controllers/gamecontroller');

// Маршрут добавления документа в MongoDB 
router.post ("/api/games", gamecontroller.gamecreate);
// Маршрут чтения документов
router.get('/api/games', gamecontroller.gameread);
// Маршрут чтения документа по id
router.get("/api/games/:id", gamecontroller.gamereadid);
// Маршрут удаления документов 
router.delete("/api/games/:id", gamecontroller.gamedelete);
// Маршрут обновления документов   
router.put("/api/games", jsonParser, gamecontroller.gameput);
// Export the router
module.exports = router;
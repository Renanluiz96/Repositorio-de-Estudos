import { Router } from "express";

import * as TodoControler from '../controllers/todo.controller'

const router = Router()

// Criando as rotas do To-do
router.get('/todo', TodoControler.all) // Listar todas as tarefas
router.post('/todo', TodoControler.add) // Adicionar Tarefas
router.put('/todo/:id', TodoControler.update) // Atualizar tarefas
router.delete('/todo/:id', TodoControler.remove) // Remover Tarefas

export default router;
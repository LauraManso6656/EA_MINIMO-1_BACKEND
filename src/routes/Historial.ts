import express from 'express';
import controller from '../controllers/historial.controller';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Historials
 *     description: Endpoints para el registro histórico de cambios
 *
 * components:
 *   schemas:
 *     Cambio:
 *       type: object
 *       properties:
 *         camp:
 *           type: string
 *           example: "nombre"
 *         valorAnterior:
 *           type: string
 *           example: "UPC"
 *         valorNuevo:
 *           type: string
 *           example: "UPC - BarcelonaTech"
 *
 *     Historial:
 *       type: object
 *       properties:
 *         universidad:
 *           type: string
 *           description: ID de la universidad relacionada
 *         cambios:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Cambio'
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 */

/**
 * @openapi
 * /historial:
 *   post:
 *     summary: Crea una entrada en el historial
 *     tags: [Historials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Historial'
 *     responses:
 *       201:
 *         description: Creado
 */
router.post(
  '/',
  ValidateJoi(Schemas.historial.create),
  controller.createHistorial
);

/**
 * @openapi
 * /historial/{historialId}:
 *   get:
 *     summary: Obtiene una entrada del historial por ID
 *     tags: [Historials]
 *     parameters:
 *       - in: path
 *         name: historialId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 */
router.get('/:historialId', controller.getHistorial);

/**
 * @openapi
 * /historial:
 *   get:
 *     summary: Lista todo el historial con paginación y buscador
 *     tags: [Historials]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: "UPC"
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', controller.getAllHistorials);

/**
 * @openapi
 * /historial/{historialId}:
 *   patch:
 *     summary: Actualiza una entrada del historial por ID
 *     tags: [Historials]
 *     parameters:
 *       - in: path
 *         name: historialId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Historial'
 *     responses:
 *       200:
 *         description: OK
 */
router.patch('/:historialId', controller.updateHistorial);

/**
 * @openapi
 * /historial/{historialId}:
 *   delete:
 *     summary: Elimina una entrada del historial por ID
 *     tags: [Historials]
 *     parameters:
 *       - in: path
 *         name: historialId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.delete('/:historialId', controller.deleteHistorial);

export default router;
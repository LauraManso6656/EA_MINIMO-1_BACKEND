import { NextFunction, Request, Response } from 'express';
import HistorialService from '../services/historial.service';

const createHistorial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const historial = await HistorialService.createHistorial(req.body);
        res.status(201).json(historial);
    } catch (error) {
        next(error);
    }
};

const getHistorial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const historial = await HistorialService.getHistorial(req.params.historialId);
        if (!historial) {
            return res.status(404).json({ message: 'Historial no encontrado' });
        }
        res.status(200).json(historial);
    } catch (error) {
        next(error);
    }
};

const getAllHistorials = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string;
        const result = await HistorialService.getAllHistorials(page, limit, search);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const updateHistorial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const historial = await HistorialService.updateHistorial(req.params.historialId, req.body);
        if (!historial) {
            return res.status(404).json({ message: 'Historial no encontrado' });
        }
        res.status(200).json(historial);
    } catch (error) {
        next(error);
    }
};

const deleteHistorial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const historial = await HistorialService.deleteHistorial(req.params.historialId);
        if (!historial) {
            return res.status(404).json({ message: 'Historial no encontrado' });
        }
        res.status(200).json(historial);
    } catch (error) {
        next(error);
    }
};

export default { createHistorial, getHistorial, getAllHistorials, updateHistorial, deleteHistorial };

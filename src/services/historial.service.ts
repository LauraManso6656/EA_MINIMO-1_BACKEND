import mongoose from "mongoose";
import Historial, { IHistorialModel } from "../models/Historial";

const createHistorial = async (data: Partial<IHistorialModel>): Promise<IHistorialModel> => {
    const historial = new Historial({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return await historial.save();
};

const getHistorial = async (historialId: string): Promise<IHistorialModel | null> => {
    return await Historial.findById(historialId).populate('universidad');
};

const getAllHistorials = async ( //Esta funciona me ha ayudado ia
    page: number = 1, 
    limit: number = 10, 
    search?: string
) => {
    const query: any = {};
    
    if (search) {
        query['cambios.camp'] = { $regex: search, $options: 'i' };
    }

    const skip = (page - 1) * limit;

    const historial = await Historial.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('universidad', 'nombre');

    const total = await Historial.countDocuments(query);

    return {
        data: historial,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
};

const updateHistorial = async (historialId: string, data: Partial<IHistorialModel>): Promise<IHistorialModel | null> => {
    return await Historial.findByIdAndUpdate(historialId, data, { new: true }).populate('universidad');
};

const deleteHistorial = async (historialId: string): Promise<IHistorialModel | null> => {
    return await Historial.findByIdAndDelete(historialId);
};

export default { createHistorial, getHistorial, getAllHistorials, updateHistorial, deleteHistorial };
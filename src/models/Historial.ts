import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICambio {
    camp: string;
    valorAnterior: any;
    valorNuevo: any;
}

export interface IHistorial {
    universidad: Types.ObjectId;
    cambios: ICambio[];
    fechaModificacion: Date;
}

export interface IHistorialModel extends IHistorial, Document { }

const HistorialSchema: Schema<IHistorialModel> = new Schema(
    {
        universidad: {
            type: Schema.Types.ObjectId,
            ref: 'Universidad',
            required: true
        },
        cambios: [
            {
                camp: { type: String, required: true },
                valorAnterior: { type: Schema.Types.Mixed },
                valorNuevo: { type: Schema.Types.Mixed }
            }
        ],
        fechaModificacion: {
            type: Date,
            default: Date.now
        },
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'historiales'
    }
);

const Historial = mongoose.model<IHistorialModel>('Historial', HistorialSchema);

export default Historial;
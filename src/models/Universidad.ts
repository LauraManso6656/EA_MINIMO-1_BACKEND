import mongoose, { Document, Schema, Types } from 'mongoose';

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface IUniversidad {
    nombre: string;
    ubicacion: string;
    usuarios: Types.ObjectId[];
}


export interface IUniversidadModel extends IUniversidad, Document { }



const UniversidadSchema: Schema<IUniversidadModel> = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre de la universidad es obligatorio'],
            unique: true,
            trim: true
        },
        ubicacion: {
            type: String,
            required: [true, 'La ubicación es obligatoria'],
            trim: true
        },
        usuarios: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Usuario'
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'universidades'
    }
);



const Universidad = mongoose.model<IUniversidadModel>('Universidad', UniversidadSchema);

export default Universidad;

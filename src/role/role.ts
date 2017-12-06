import { model, Schema, Document } from 'mongoose';

export interface IRoleModel extends Document {
    id: string,
    roleName: string,
    desc: string,
    code:string
    isValid: Boolean,
    createdAt: Date,
    updateAt: Date,
}

export interface IRolePowerModel extends Document {
    roleId: String,
    powerId: String
}

let RoleSchema: Schema = new Schema({
    roleName: {
        type: String,
        default: '',
        unique: true,
        required: true
    },
    desc: String,
    code:String, 
    isValid: Boolean,
    createAt: {
        type: Date,
        default: new Date(),
        required: true
    },
    updateAt: {
        type: Date,
        default: new Date(),
        required: true
    },
})


export const RolePowerSchema = model<IRolePowerModel>("RolePower", new Schema({
    roleId: String,
    powerId: String
}))

export default model<IRoleModel>('Role', RoleSchema);
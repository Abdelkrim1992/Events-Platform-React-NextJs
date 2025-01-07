import { Schema, model, Document } from "mongoose";

export interface IOrder extends Document {
    _id : string;
    creatAt: Date;
    stripId: string;
    totalAmount: string;
    event : { _id: string, name: string},
    buyer : { _id: string, first_name: string, last_name: string}
}

const OrderSchema = new Schema ({
    creatAt: { type: Date, default: Date.now},
    stripId: { type: String, require: true, unique: true},
    totalAmount: { type: String},
    event : { type: Schema.Types.ObjectId, ref:'Event'},
    buyer : { type: Schema.Types.ObjectId, ref:'User'}
})

const Order = model('order', OrderSchema);

export default Order;
import { Schema , model, Document} from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name : string;
}

const CategorySchema = new Schema({
    name : { type: String, require: true, unique: true}
})

const Category = model('category', CategorySchema)

export default Category ;

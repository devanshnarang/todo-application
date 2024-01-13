import {Schema, model} from 'mongoose';

const itemSchema = new Schema(
    {
      userId: {required: true, type: Schema.ObjectId},
      text: {required: true, type: String},
      done: {default: false, required: true, type: Boolean},
    },
    {
      timestamps: {
        createdAt: 'created',
        updatedAt: 'updated',
      },
    },
);

const Item = model('Item', itemSchema);

export default Item;

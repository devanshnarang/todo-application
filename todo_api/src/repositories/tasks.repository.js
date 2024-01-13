import {Item} from '../models';

export default {
  listItem: async (filters) => {
    return await Item.find(filters);
  },
  createItem: async (payload) => {
    const item = new Item(payload);
    await item.save();
    return item;
  },
  retrieveItem: async (id, user) => {
    return await Item.findOne({_id: id, userId: user._id});
  },
  updateItem: async (id, user, payload) => {
    return await Item.findOneAndUpdate({_id: id, userId: user._id}, payload);
  },
  partialUpdateItem: async (id, user, payload) => {
    return await Item.findOneAndUpdate({_id: id, userId: user._id}, payload);
  },
  destroyItem: async (id, user) => {
    return await Item.findOneAndDelete({_id: id, userId: user._id});
  },
};

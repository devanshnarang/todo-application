import {compare, genSalt, hash} from 'bcryptjs';
import {Schema, model} from 'mongoose';

const tokenSchema = new Schema(
    {
      key: {required: true, type: String, unique: true},
    },
    {
      timestamps: {createdAt: 'created'},
    },
);

const userSchema = new Schema({
  email: {required: true, type: String, unique: true},
  firstName: {required: true, type: String},
  lastName: {required: true, type: String},
  password: {required: true, type: String},
  isAdmin: {default: false, required: true, type: Boolean},
  isActive: {default: true, required: true, type: Boolean},
  dateJoined: {default: Date.now, required: true, type: Date},
  lastLogin: {required: false, type: Date},
  token: {required: false, type: tokenSchema},
});

userSchema.pre('save', async function(next) {
  // eslint-disable-next-line no-invalid-this
  if (!this.isModified('password')) return next();
  try {
    const salt = await genSalt(12);
    // eslint-disable-next-line no-invalid-this
    const hashedPassword = await hash(this.password, salt);
    // eslint-disable-next-line no-invalid-this
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(e);
  }
});

userSchema.methods.validatePassword = async function(candidatePassword) {
  // eslint-disable-next-line no-invalid-this
  const sucess = await compare(candidatePassword, this.password);
  return sucess;
};

const User = model('User', userSchema);

export default User;

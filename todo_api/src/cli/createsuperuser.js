import mongoose from 'mongoose';
import {read} from 'read';

import {User} from '../models';
import {accountsValidator} from '../validators';
import {MONGODB_URI} from '../settings';

/**
 * Create super user
 */
export default async function createSuperUser() {
  const email = await read({prompt: 'Email: '});
  const firstName = await read({prompt: 'First name: '});
  const lastName = await read({prompt: 'Last name: '});
  const password = await read({
    prompt: 'Password: ',
    replace: '*',
    silent: true,
  });
  const passwordAgain = await read({
    prompt: 'Password (again): ',
    replace: '*',
    silent: true,
  });

  try {
    const validatedData = await accountsValidator.createUser.validateAsync({
      email,
      firstName,
      lastName,
      password,
      passwordAgain,
    });
    await mongoose.connect(MONGODB_URI);
    const user = await User.findOne({email});
    if (user) {
      console.error('Error: That email is already taken.');
      process.exit(2);
    }
    const newUser = new User({...validatedData, isAdmin: true});
    await newUser.save();
  } catch (err) {
    console.error(err);
    process.exit(2);
  }
  console.info('Superuser created successfully.');
  process.exit(0);
}

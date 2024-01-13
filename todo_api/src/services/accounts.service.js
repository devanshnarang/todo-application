import {accountsRepository} from '../repositories';
import {accountsValidator} from '../validators';

export default {
  login: async (payload) => {
    const validatedData = await accountsValidator.login.validateAsync(payload);
    return await accountsRepository.login(validatedData);
  },
  detail: async (user) => {
    return await accountsRepository.detail(user);
  },
  logout: async (user) => {
    return await accountsRepository.logout(user);
  },
};

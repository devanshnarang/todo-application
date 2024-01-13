import crypto from 'crypto';

/**
 * Generate Key
 * @return {string}
 */
export function generateKey() {
  return crypto.randomBytes(20).toString('hex');
}

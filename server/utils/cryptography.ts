import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const iv = randomBytes(16);

export const encrypt = (message: string): string => {
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY!), iv);
  const encrypted = Buffer.concat([cipher.update(message), cipher.final()])

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export const decrypt = (message: string): string => {
  const messageParts: any[] = message.split(':');
  const iv = Buffer.from(messageParts.shift(), 'hex');
  const encryptedText = Buffer.from(messageParts.join(':'), 'hex');
  const decipher = createDecipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY!), iv);
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

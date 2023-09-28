import { KeyPair } from "near-api-js";
import { WalletEntity } from "../entities/wallet.entity";
const nearSeed = require("near-seed-phrase");

const createWallet = async (userId: string) => {
  try {
    const { publicKey, secretKey } = nearSeed.generateSeedPhrase();
    const keyPair = KeyPair.fromString(secretKey);
    const implicitAccountId = Buffer.from(keyPair.getPublicKey().data).toString("hex");

    const wallet = new WalletEntity();

    wallet.userId = userId;
    wallet.address = implicitAccountId;
    wallet.privateKey = secretKey;
    wallet.publicKey = publicKey;

    const walletSaved = await wallet.save();

    return walletSaved;
  } catch (err) {
    throw new Error(`Failed to create wallet: ${err}`);
  }
};

// const updateUser = async (id: string, body: Partial<WalletEntity>) => {
//   return await WalletEntity.update({ id }, body);
// };

// const updateStatusUserById = async (id: string, status: KycStatus) => {
//   return await WalletEntity.update({ id }, { status });
// };

// const getUserByUserId = async (userId: string) => {
//   return await WalletEntity.findOneBy({ userId });
// };

export default { createWallet };

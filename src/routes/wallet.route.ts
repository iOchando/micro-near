import { Router } from "express";
import walletController from "../controllers/wallet.controller";

const router = Router();

router.post("/create-wallet/", walletController.createWallet);

export { router };

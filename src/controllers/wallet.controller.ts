import { Request, Response } from "express";
import walletService from "../services/wallet.service";
import { HttpStatus } from "../shared/HttpStatus.enum";

const createWallet = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(HttpStatus.HTTP_400_BAD_REQUEST).send({ message: "Invalid data." });
    }

    const walletSaved = await walletService.createWallet(userId);

    // return res.json({userId: walletSaved.id, address: walletSaved.address});
    return res.json(walletSaved);
  } catch (error: any) {
    return res.status(HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR).send(error.message || error);
  }
};

// const getUserByUserId = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.body;

//     const user = await userService.getUserByUserId(id);

//     return res.json({ status: user?.status || null });
//   } catch (error: any) {
//     return res.status(HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR).send(error.message || error);
//   }
// };

// const getNameByUserId = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.body;

//     const user = await userService.getUserByUserId(id);

//     return res.json({ name: user?.name || null });
//   } catch (error: any) {
//     return res.status(HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR).send(error.message || error);
//   }
// };

export default { createWallet };

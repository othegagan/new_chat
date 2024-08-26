import { env } from '@/configs/env';
import admin from '@/configs/firebase';
import { ApiError } from '@/utils/apiError';
import logger from '@/utils/logger';
import { Request, Response } from 'express';

const envPrefix = env.ENV_PREFIX || 'dev';

export const getAllChatAssets = async (req: Request, res: Response) => {
    const { tripId } = req.validatedData;

    try {
        const db = admin.firestore();

        const id = `${envPrefix}_id_${tripId}`;
        const assets: any = await db.collection(id).doc(id).get();

        res.status(200).json(assets._fieldsProto);
    } catch (error) {
        logger.error(error.message);
        res.status(500).json(new ApiError(500, error.message, error));
    }
};

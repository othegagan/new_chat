import { createTuroTripOnBundee } from '../../controllers/turo/createTuroTripOnBundee.controller.js';
import { passwordAuth } from '../../middlewares/passwordAuth.middleware.js';
import { zodValidate } from '../../utils/zodValidate.js';
import express from 'express';
import { z } from 'zod';
const schema = z.object({
    dates: z.string({ required_error: 'Dates are required' }),
    turoTripId: z.string({ required_error: 'Turo trip id is required' }),
    turoId: z.string({ required_error: 'Turo id is required' })
});
const createTuroTripOnBundeeRouter = express.Router();
createTuroTripOnBundeeRouter.post('/', passwordAuth, zodValidate(schema), createTuroTripOnBundee);
export default createTuroTripOnBundeeRouter;

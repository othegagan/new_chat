import { env } from '../../configs/env.js';
import logger from '../../utils/logger.js';
import axios from 'axios';
import logUpdate from '../logUpdate.controller.js';
export default async function approveBooking(tripId) {
    const url = `${env.BUNDEE_BOOKING_SERVICE_BASE_URL}/v1/booking/updateReservationApproval`;
    const payload = {
        tripid: tripId,
        comments: ''
    };
    const headers = {
        'Content-Type': 'application/json',
        Bundee_auth_token: env.BUNDEE_AUTH_TOKEN
    };
    try {
        const response = await axios.post(url, payload, { headers: headers });
        logger.info(response.data);
        if (response.data.errorCode === '0') {
            await logUpdate(response.data.errorMessage);
        }
        else {
            await logUpdate(response.data.errorMessage);
        }
    }
    catch (error) {
        logger.error(error);
    }
}

import asyncHandler from 'express-async-handler';
// @Desc Register
// @Route /api/auth/register
// @Method POST
export const register = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({ message: ' Registerd OK' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});

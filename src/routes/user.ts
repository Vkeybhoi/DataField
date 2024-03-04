import {Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ title: 'Express' });
});

export default router;

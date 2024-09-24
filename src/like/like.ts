import { Request, Response, Router } from 'express';
import express from 'express';

const router = express.Router();

router.route('/')
    .get((req: Request, res: Response) => {
        res.json({
            message: "Liked via GET"
        });
    })
    .post((req: Request, res: Response) => {
        res.json({
            message: "Liked via POST"
        });
    });

export default router;

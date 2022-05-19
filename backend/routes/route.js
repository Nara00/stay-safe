const { Router } = require('express');
const pool = require('../db')

const router = Router();

const post_event = async (req, res, next) => {
    try {
        const { userid, latitude, longitude, description, address, type } = req.body;

        const newEvent = await pool.query(
            // ese returning es para que me devuelva lo que fui agregando
            "INSERT INTO crimenes (userid, latitude, longitude, description, address, type) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [userid, latitude, longitude, description, address, type]
        );
        res.json(newEvent.rows[0]);
    } catch (error) {
        next(error);
    }
};

router.post('/', post_event)

module.exports = router;
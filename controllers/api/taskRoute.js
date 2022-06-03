const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Task } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const newPost = await Task.create({
            post: req.body.post,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});
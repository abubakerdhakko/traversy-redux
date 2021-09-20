const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const Contact = require('../models/Contact');
const User = require('../models/User');
const commentModel = require('../models/comment_model');


// @route    POST api/coments
// @desc     Create a contact comment
// @access   Private
// CREATE Comment
router.post("/:contactId/comments",
    [auth,], async (req, res) => {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body);

        try {
            // SAVE INSTANCE OF Comment MODEL TO DB
            comment
                .save()
                .then(comment => {
                    // REDIRECT TO THE ROOT
                    return contact.findById(req.params.contactId);
                })
                .then(post => {
                    post.comments.unshift(comment);
                    return post.save();
                })
        } catch (err) {
            
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });


router.post(
    '/',
    [
        auth,

    ],
    async (req, res) => {


        const { comment } = req.body;
        res.send('ssss', req.body)

        try {
            const newComment = new commentModel({
                comment,
                contact: req.contact.id
            });
            const varComment = await newComment.save();

            res.json(varComment);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);




module.exports = router;

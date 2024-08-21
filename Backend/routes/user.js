const express = require('express');
const { User } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),
});

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)

    if(!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            message: "Email already taken / Invalid inputs"
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user) {
        const token = jwt.sign({
            userId: user._id,
        }, JWT_SECRET);

        res.json({
            token: token,
            message: "User authenticated successfully"
        })
        return ;
    }

    res.status(411).json({
        message: "Invalid username or password"
    })
})


const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
});

router.put('/', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "User information updated successfully"
    })
})

module.exports = router;
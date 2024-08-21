// const JWT_SECRET = require("./config");
// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     console.log("User ID from authMiddleware:", req.userId);

//     if(!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(403).json({
//             message: "Missing or invalid token || shoul be start with Bearer"
//         });
//     } 

//     const token = authHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         console.log("Decoded token:", decoded); // Log decoded token for debugging
//         req.userId = decoded.userId;

//         next();

//     } catch (err) {
//         console.error("Token verification error:", err); // Log the error for debugging
//         return res.status(403).json({});
//     }


// };

// module.exports = {
//     authMiddleware
// }


const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Decoded token:", decoded); // Log decoded token for debugging
        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}
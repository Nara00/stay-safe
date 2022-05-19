const { config } = require('dotenv')
config()

module.exports = {
    db: {
        user: process.env.DB_USER || "qkbkeqsjobjgiq",
        password: process.env.DB_PASSWORD || "",
        host: process.env.DB_HOST || "ec2-54-165-90-230.compute-1.amazonaws.com",
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_DATABASE || "d3bjn19bl5prqr",
    },
};
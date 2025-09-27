import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//1.cors confuguration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//2.set middleware

//(below)ask that,data may come in form of json
app.use(express.json({limit: "16kb"}))//latest method. in past it is done by body-parser (see in req.body) see on expressjs.com
//(below)ask that, data may come from url in encoded form like for space you can see (+ or %20)
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))//public folder that stores assets

//3.now for cookies
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }
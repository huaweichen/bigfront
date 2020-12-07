import Router from "koa-router";
import LoginController from "../api/LoginController";

const router = new Router()

router.post('/forget-password', LoginController.forgetPassword)

export default router
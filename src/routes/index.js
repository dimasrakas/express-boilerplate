import express from "express";
import { allUsers } from "../controllers/User/UserController";

const router = express.Router();

router.get("/", allUsers);
router.get("/dimas", allUsers);
router.get("/", allUsers);

module.exports = router;

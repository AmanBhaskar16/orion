// postRoutes.js
import express from "express";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getAllPosts,
  likePost,
  unlikePost,
  followUser,
  unfollowUser,
  sharePost,
  addComment
} from "../controllers/postController.js";

import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// middleware like authenticateToken should attach req.user
router.post("/", authenticateToken, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.put("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);

// Likes
router.post("/:id/like", authenticateToken, likePost);
router.delete("/:id/like", authenticateToken, unlikePost);

// Comments
router.post("/:id/comments", authenticateToken, addComment);

// Shares
router.post("/:id/share", authenticateToken, sharePost);

// Follow/Unfollow post author
router.post("/author/:id/follow", authenticateToken, followUser);
router.delete("/author/:id/follow", authenticateToken, unfollowUser);

export default router;

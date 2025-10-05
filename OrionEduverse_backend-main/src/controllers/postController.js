// postController.js
import * as postModel from "../models/postModel.js";

// ✅ Create Post
export const createPost = async (req, res) => {
  try {
    const userId = req.user.id; // assuming user is set in middleware
    const { content, images, documents } = req.body;
    if (!text) {
      return res
        .status(400)
        .json({ success: false, message: "Post text is required" });
    }

    const post = await postModel.createPost({
      userId,
      text,
      images,
      documents,
    });
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ success: false, message: "Failed to create post" });
  }
};

// ✅ Get Single Post
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.getPost(parseInt(id));

    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });

    res.json({ success: true, data: post });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ success: false, message: "Failed to fetch post" });
  }
};

// ✅ Update Post
export const updatePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { text, images, documents, published } = req.body;

    // Validation
    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Post text is required",
      });
    }

    // Validate arrays if provided
    if (images && !Array.isArray(images)) {
      return res.status(400).json({
        success: false,
        message: "Images must be an array",
      });
    }

    if (documents && !Array.isArray(documents)) {
      return res.status(400).json({
        success: false,
        message: "Documents must be an array",
      });
    }

    const updatedPost = await postModel.updatePost({
      postId: parseInt(id),
      userId,
      text,
      images,
      documents,
      published,
    });

    if (!updatedPost) {
      return res.status(403).json({
        success: false,
        message: "Not authorized or post not found",
      });
    }

    res.json({
      success: true,
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ success: false, message: "Failed to update post" });
  }
};

// ✅ Delete Post
export const deletePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const result = await postModel.deletePost({ postId: parseInt(id), userId });

    if (result.count === 0) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized or post not found" });
    }

    res.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ success: false, message: "Failed to delete post" });
  }
};

// ✅ Get All Posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
};

// 👍 Like Post
export const likePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const like = await postModel.likePost({ userId, postId: parseInt(id) });
    res.status(201).json({ success: true, data: like });
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ success: false, message: "Failed to like post" });
  }
};

// 👎 Unlike Post
export const unlikePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const result = await postModel.unlikePost({ userId, postId: parseInt(id) });
    res.json({ success: true, data: result });
  } catch (error) {
    console.error("Error unliking post:", error);
    res.status(500).json({ success: false, message: "Failed to unlike post" });
  }
};

// 💬 Add Comment
export const addComment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ success: false, message: "Text required" });
    }

    const comment = await postModel.addComment({ userId, postId: parseInt(id), content });
    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ success: false, message: "Failed to add comment" });
  }
};

// 🔄 Share Post
export const sharePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const shared = await postModel.sharePost({ userId, postId: parseInt(id) });
    if (!shared) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(201).json({ success: true, data: shared });
  } catch (error) {
    console.error("Error sharing post:", error);
    res.status(500).json({ success: false, message: "Failed to share post" });
  }
};

// ➕ Follow User
export const followUser = async (req, res) => {
  try {
    const followerId = req.user.id;
    const { id: followingId } = req.params;

    const follow = await postModel.followUser({ followerId, followingId: parseInt(followingId) });
    res.status(201).json({ success: true, data: follow });
  } catch (error) {
    console.error("Error following user:", error);
    res.status(500).json({ success: false, message: "Failed to follow user" });
  }
};

// ➖ Unfollow User
export const unfollowUser = async (req, res) => {
  try {
    const followerId = req.user.id;
    const { id: followingId } = req.params;

    const result = await postModel.unfollowUser({ followerId, followingId: parseInt(followingId) });
    res.json({ success: true, data: result });
  } catch (error) {
    console.error("Error unfollowing user:", error);
    res.status(500).json({ success: false, message: "Failed to unfollow user" });
  }
};

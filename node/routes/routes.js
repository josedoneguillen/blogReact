import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/BlogController.js';

// Initialize router
const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
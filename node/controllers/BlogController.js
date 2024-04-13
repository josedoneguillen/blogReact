import BlogModel from "../models/blogModel.js";

/* Methods */

/* List all posts */
export const getAllPosts = async (req, res) => {

    try {

        const posts = await BlogModel.findAll();
        res.json(posts);

    } catch (error) {

        res.json({message: error.message});

    }

}

/* Get one post */
export const getPost = async (req, res) => {

    try {

        const post = await BlogModel.findAll({
            where: { id: req.params.id }
        });
        res.json(post[0]);
    
    } catch (error) {

        res.json({message: error.message});

    }
}

/* Create one post */
export const createPost = async (req, res) => {

    try {

        await BlogModel.create(req.body);
        res.json({message: "Post created, successfully!"})
        
    } catch (error) {

        res.json({message: error.message});
        
    }

}

/* Actualizar post */
export const updatePost = async (req, res) => {

    try {

        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({message: `Post id: ${req.params.id}, updated successfully!`});

    } catch (error) {

        res.json({message: error.message});

    }
}

/* Delete post */
export const deletePost = async (req, res) => {

    try {

        await BlogModel.destroy({
            where: { id: req.params.id }
        });
        
        res.json({message: `Post id: ${req.params.id}, deleted`});

    } catch (error) {

        res.json({ message: error.message});

    }
}
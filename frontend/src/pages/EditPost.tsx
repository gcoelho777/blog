import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../services/api";

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const post = await getPost(id);
                setTitle(post.title);
                setContent(post.content);
            } catch(error) {
                console.error("Erro ao carregar o post:", error)
            }
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updatePost(id, {title, content});
            navigate("/");
        } catch(error) {
            console.error("Erro ao editar post:", error);
        }
    }

    return (
        <div>
            <h2>Editar Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo" required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Conteúdo" required></   textarea>
                <button type="submit">Editar Post</button>
            </form>
        </div>
    );
}

export default EditPost;
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { createPost } from "../services/api";


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const postData = {
            title: title,
            content: content
        }

        try {
            await createPost(postData);
        } catch (error) {
            console.error("Erro ao criar post: ", error);
        }
    };

    return (
        <div>
            <h2>Criar Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo" required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Conteúdo" required></textarea>
                <button type="submit">Criar Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
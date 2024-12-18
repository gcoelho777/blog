import {useEffect, useState} from "react";
import { fetchPosts } from "../services/api";

interface Post {
    id: number;
    title: string;
    content: string;
  };

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch(error) {
                console.error("Erro ao pegar posts: ", error);
            }
        };

        getPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.length === 0 ? (
                <p>Carregando posts...</p>
            ) : (
            <ul>
                {posts.map(post => {
                    return (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <h3>{post.content}</h3>
                    </li>
                )
                })}
            </ul>
            )}
        </div>
    );
};

export default Home;
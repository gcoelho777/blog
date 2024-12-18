import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchPosts = async() => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar post:" , error);
    }
};

export const createPost = async(post: {title: string, content: string}) => {
    const response = await fetch('/api/posts', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(post)
    });

    console.log(response)
    if(!response.ok) throw new Error("Erro ao criar post");
    return response.json();
};

export const getPost = async(id: string|undefined) => {
    const response = await fetch(`/api/posts/${id}`);
    if(!response.ok) throw new Error ("Erro ao carregar post");
    return response.json();
};

export const updatePost = async(id: string|undefined, post: {title: string, content: string}) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(post)
    });
    if(!response.ok) throw new Error("Erro ao editar post");
    return response.json();
};
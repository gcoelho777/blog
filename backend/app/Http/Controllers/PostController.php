<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
        $posts = Post::all();

        return response()->json($posts);    
    }

    public function store(Request $request) {
        $postValidation = $request->validate([
            'title' => 'required|string|max:255', 
            'content' => 'required|string'
        ]);

        $post = Post::create($postValidation);

        return response()->json($post, 201);
    }

    public function update(Request $request, $id) {
        $postValidation = $request->validate([
            'title' => 'required|string|max:255', 
            'content' => 'required|string'
        ]);

        $post = Post::findOrFail($id);
        $post->update($postValidation);

        return response()->json($post);
    }
}

import { ref } from 'vue'

import axios from 'axios'

export default function usePosts() {

    const posts = ref([])
    const post = ref([])

    const fetchPosts = async () => {

        let response = await axios.get('/api/posts')

        posts.value = response.data.data
        // posts.value.reverse();

        // console.log(posts)

    }

    const fetchPost = async (slug) => {

        let response = await axios.get(`/api/posts/${slug}`)

        post.value = response.data.data
        posts.value.reverse();

        // console.log(posts)

    }

        return {

            posts,
            post,
            fetchPosts,
            fetchPost
        }

    }

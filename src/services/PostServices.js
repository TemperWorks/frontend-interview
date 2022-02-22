import axios from 'axios';

//For requests related to Posts in our application such as adding/removing/editing post.

//TODO: update request parameters properly
export const getPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts?id=1&id=2&id=3&id=4&id=5');
};
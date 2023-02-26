import { configureStore } from '@reduxjs/toolkit'
import dostReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/userSlice';



const store = configureStore({
	reducer: {
		posts: dostReducer,
		users: usersReducer,
	}
})

export default store;
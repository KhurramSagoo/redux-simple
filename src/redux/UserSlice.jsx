import { createSlice } from '@reduxjs/toolkit'

export const userSlice=createSlice(
    {
        name:"user",
        initialState:{
            users: [
                { id: 1, name: 'User1', email: 'user1@example.com' },
                { id: 2, name: 'User2', email: 'user2@example.com' },
              ],
                     },
        reducers:{
                        update:(state,action)=>{
                        state.name=action.payload.name;
                        state.email=action.payload.email;}
                 },
                
                 remove: (state, action) => {
                    // Remove the user with the specified ID
                    state.users = state.users.filter((user) => user.id !== action.payload)
                  },
        }
)

export const {update, remove}=userSlice.actions;
export default userSlice.reducer;
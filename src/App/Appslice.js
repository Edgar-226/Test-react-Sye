import { createSlice } from "@reduxjs/toolkit";

var userList = [
    {
        user:"Admin",
        password:"12345",
        permissions:[
            "/character",
            "/location",
            "/"
        ]
    },
    {
        user:"User",
        password:"12345",
        permissions:[
            "/character",
            "/episode",
            "/"
        ]
    }
]

var initialState ={
    user:null,
    loginError:"",
    characters:[],
    episode:[],
    locationData:[]
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login:(state, action) =>{
            let {user, password} = action.payload;
            var _user = userList.find(s => s.user === user && s.password === password);
            if(_user){
                state.user = _user;
                state.loginError="";
            }
            else{
                state.loginError="usuario no encontrado" 
            }

        },
        logout:(state,action) =>{
            state.user = null;
        },

        setCharacters:(state,action) =>{
            state.characters = action.payload;
        },
        setEpisode:(state,action) =>{
            state.episode = action.payload;
        },
        setLocation:(state,action) =>{
            state.locationData = action.payload;
        },
        
    },
})


export const { login, logout, setCharacters,setEpisode,setLocation} = appSlice.actions

export default appSlice.reducer
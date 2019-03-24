
import Home from "./components/Home.vue";
import Bahbecave from "./components/Bahbecave"

export default [
{
    path:"/",
    component: Home
},
{
    path:"/thebahbecave",
    component: Bahbecave
},

{
    path:"/*",
    component: Home
},

];
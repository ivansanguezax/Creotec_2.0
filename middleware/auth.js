// export default function({ app, route, redirect}){
//     if(route.path !== '/auth/signin'){
//         if(!app.$fire.auth.currentUser){
//             return redirect('/auth/signin');
//         }
//     }else if (route.path === '/auth/signin'){
//         if(app.$fire.auth.currentUser){
//             return redirect('/')
//         }
//     }
// }
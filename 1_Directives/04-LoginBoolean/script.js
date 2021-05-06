console.log("JS working")

const App = {
    data(){
        return{
            isLogin: false,
            anotherBool: true,
        }     
    }
}

Vue.createApp(App).mount('#vapp') //mounting app on id of vapp
//create App takes const App which is a vue app
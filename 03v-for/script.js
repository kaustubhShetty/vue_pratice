console.log('Working');

const App = {
    data(){
        return{
            courseList: [
                {id: "lco1",
                courseName: "Django Full stack",
                subtitle: "Learn Django with postgres",
                price: "199",
                courseImage: "django.png",
                url: "https://courses.learncodeonline.in/learn/FullStack-Django-Developer-Freelance-ready",
            },
            {
                id: "lco2",
                courseName: "Interview Preparation",
                subtitle: "Crack the FAANG Interview",
                price: "1999",
                courseImage: "interview.png",
                url: "https://courses.learncodeonline.in/learn/Mastering-Data-Structure-and-Algorithm-with-Python",
            },
            {
                id: "lco3",
                courseName: "React Native",
                subtitle: "Build Mobile Apps",
                price: "299",
                courseImage: "rn.png",
                url: "https://courses.learncodeonline.in/learn/Complete-React-Native-Mobile-App-developer",
            }],
        }
    }
}

Vue.createApp(App).mount('#vapp') //We are applying this vue app to an id of vapp
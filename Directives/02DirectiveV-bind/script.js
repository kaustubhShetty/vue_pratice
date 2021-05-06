console.log("All working fine");

const App={
    data(){
        return {
            heading: 'A Trip to japan',
            subhead:'Nature park in japan',
            myImg: 'japan.jpeg',
            buttonText:'Button title',
            url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelcaffeine.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fnara-japan-deer-283.jpg&imgrefurl=https%3A%2F%2Fwww.travelcaffeine.com%2Fdeer-nara-japan%2F&tbnid=CxsS9nHPgirrCM&vet=12ahUKEwjGocuU8KXwAhVJAnIKHdRPCakQMygHegUIARDMAQ..i&docid=4loz65kdtLL9HM&w=1024&h=710&q=japan%20deer%20park&ved=2ahUKEwjGocuU8KXwAhVJAnIKHdRPCakQMygHegUIARDMAQ',
        }
    }
}

Vue.createApp(App).mount('.vapp'); //We are mounting our Vue app on a class called vapp
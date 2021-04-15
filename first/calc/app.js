const app = new Vue({
    el: '#app',
    data: {
        username: 'Andriana',
        
    }
})
const app1 = new Vue({
    el: '#app1',
    data: {
        birthdate: new Date(),
    },
    computed: {
        age() {
            return new Date().getFullYear() - new Date(this.birthdate).getFullYear();
        }
    }
})
const app2= new Vue({
    el: '#app2',
    data: {
       limbaj:{
            JS: 1,
            Python: 0.7,
            Java: 1.3
            },
        Experienta: {
                1: 10000,
                2: 12000,
                3: 13500,
                4: 14000,
                5: 15000
            },
        //salariu: null
    },
    computed: {
        salariu(){
            return this.coeficient*this.experience;
        }
    },
})

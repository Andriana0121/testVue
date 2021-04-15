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
    el: '#app3',
    data: {
        JS: 1,
        Python: 0.7,
        Java: 1.3,
        Experienta: undefined,
        salariu: undefined
        
    },
    computed: {
        salariu(){

        }
    },
})
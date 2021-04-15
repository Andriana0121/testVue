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
const app3 = new Vue({
    el: '#app3',
    data: {
      coef: {
        'js': 1,
        'python': 0.7,
        'java': 1.3
      },
      experienceWork: {
        1: 10000,
        2: 12000,
        3: 13500,
        4: 14000,
        5: 15000
      },
      language: 'js',
      experience: 1,
    },
    
    computed: {
      salary() {
        return this.experienceWork[this.experience] * this.coef[this.language];
      }
    }
  });

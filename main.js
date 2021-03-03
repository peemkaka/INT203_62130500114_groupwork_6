const constraints = {
    username: {
        presence: true,
    },
    email: {
        presence: true ,
        email: true ,
    },
    password: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    fullname: {
        presence: true,
    },
    title: {
        presence: true,
    },
    language: {
        presence: true,
    },
}

const app = {
    data() {
        return {
            // fname: 'Peempat ',
            // lname: 'Pinsang',
            // carrier: 'Student from SIT ',
            // images : '/images/g4.jpg',
            // a : "38",
            // b : "980",
            // c : "8.9",
            username: null,
            email: null,
            password: null,
            fullname: null,
            title: null,
            language: null,
            showEmail: null,
            showFullname: null,
            showTitle: null,
            errors: [],
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({username: this.username,
                                    email: this.email,
                                    password: this.password,
                                    fullname: this.fullname,
                                    title: this.title,
                                    language: this.language},
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
                this.updateProfile();
            }
        },
        updateProfile(){
            this.showEmail = this.email;
            this.showFullname = this.fullname;
            this.showTitle = this.title;
           
        }
    }
    
}
mountedApp = Vue.createApp(app).mount('#app')

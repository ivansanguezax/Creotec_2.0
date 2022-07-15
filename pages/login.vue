<template>
  <div class="container">
    <div>
        <h1 class="title">Firebase Test App</h1>
        <h2>Login</h2>
        <form @submit.prevent="pressed">
            <div class="login"><input type="text" placeholder="email" v-model="email"></div>
            <div class="password"><input type="password" placeholder="password" v-model="password"></div>
            <button class="btn btn-primary">Login</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        pressed() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                console.log('logged in');
                debugger;
                this.$router.push('/')
            })
            .catch(error => {
                this.error = error
            })
        }
    }
}
</script>

<style>

</style>
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {
        axios.interceptors.response.use(undefined, function(err) {
            return new Promise(function(resolve, reject) {
                if (
                    err.status === 401 &&
                    err.config &&
                    !err.config.__isRetryRequest
                ) {
                    // if you ever get an unauthorized, logout the user
                    this.$store.dispatch('auth/AUTH_LOGOUT')
                    // you can also redirect to /login if needed !
                }
                throw err
            })
        })
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

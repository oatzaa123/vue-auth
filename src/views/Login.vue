<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>User name</label>
            <input
                required
                v-model="username"
                type="text"
                placeholder="Snoopy"
            />
            <label>Password</label>
            <input
                required
                v-model="password"
                type="password"
                placeholder="Password"
            />
            <hr />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async login() {
            const { username, password } = this
            const user = {
                username,
                password,
            }
            await this.$store
                .dispatch('auth/AUTH_REQUEST', user)
                .then((result) => {
                    this.$router.push({ name: 'Home' })
                })
                .catch((err) => {
                    alert('Not Authenticate')
                })
        },
    },
}
</script>

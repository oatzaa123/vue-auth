import axios from 'axios'

export default {
    AUTH_REQUEST({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            // The Promise used for router redirect in login
            commit('AUTH_REQUEST')
            axios
                .post(`http://localhost:5000/auth/login`, {
                    username: user.username,
                    password: user.password,
                })
                .then((res) => {
                    const token = res.data.token
                    localStorage.setItem('user-token', token) // store the token in localstorage
                    commit('AUTH_SUCCESS', token)
                    // you have your token, now log in your user :)
                    // dispatch(USER_REQUEST)
                    resolve(res)
                })
                .catch((err) => {
                    commit('AUTH_ERROR', err)
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
        })
    },
}

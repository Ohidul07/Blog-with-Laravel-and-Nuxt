export const state = () => ({
    loggedIn: false,
    token: '',
    user: [],
    login_err_msg: ''

});

export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_USER(state, user) {
        console.log(user);
        console.log(typeof(user));
        state.user = user;
    },
    SET_ERROR(state, data) {
        state.errors = user;
    },
    LOGIN_STATUS(state, data) {
        state.loggedIn = data;
    }
}

export const actions = {
    submitLoginData(context, data) {
        try {
            return this.$axios.$post('/api/admin/login', data)
            .then(res => {
                if(typeof(res.token) != "undefined" && res.token !== null) {
                    context.commit('SET_TOKEN', res.token);
                }
            })
        } catch(e) {
            console.log(e);
            // this.errors = e.response.data?.errors;
            // context.commit('SET_TOKEN', e.token);
            // this.loading = false;
            // this.$notify.error({
            //     message: e.response.data?.message || {}
            // });
        }
    },
    getUserData(context) {
        try {

            return this.$axios.$get('/api/admin/user', {
              headers: {
                Authorization: `Bearer ${context.state.token}`,
              },
            })
            .then(res => {
                if(typeof(res.data) != "undefined" && res.data !== null) {
                    context.commit('SET_USER', res.data);
                    context.commit('LOGIN_STATUS', true);
                }    
            })

        } catch(e) {

            console.log(e)
        }
    },
    logoutUser(context) {

        try {

            const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

            this.$axios.$post('/api/admin/logout', null, {
              headers: {
                'X-CSRF-TOKEN': csrfToken,
              },
            });

            context.commit('SET_TOKEN', '');
            context.commit('SET_USER', '');
            context.commit('LOGIN_STATUS', false);
            console.log(context.state.loggedIn);
            console.log(context.state.user);

        } catch(e) {

        }
    }
}
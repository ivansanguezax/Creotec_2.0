const actions = {
    async onAuthStateChangedAction (state, { authUser }) {
        if (!authUser) {
          state.commit('SET_USER', null);
          this.$router.push({
            path: '/'
          })
        } else {
          const { uid, email } = authUser;
          state.commit('SET_USER',{
            uid,
            email
          })
        }
      }
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
}

const state = () => ({
    user: null,
});

const getters = {
    getUser(state) {
        return state.user;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
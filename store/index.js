export const state = () => ({
  uid: null,
  user: null,
  mail: null,
});
  
export const actions = {
  async onAuthStateChangedAction(state, { authUser }) {
    if (!authUser) {
      state.commit('SET_UID_AND_MAIL', {
        uid : null,
        email: null
      } );
      this.$router.push({
        path: '/'
      })
    } else {
      const { uid, email } = authUser;
      state.commit('SET_UID_AND_MAIL', {
        uid,
        email
      });
      this.$router.push({
        path: '/'
      })
    }
  }
};
export const mutations = {
  SET_UID_AND_MAIL(state, obj) {
    state.uid = obj.uid;
    state.mail = obj.email;
  },
};
export const getters = {
  getUser: (state) => {
    return state.mail.split('@')[0];
  }
};

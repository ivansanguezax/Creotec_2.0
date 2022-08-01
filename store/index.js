import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state() {
    return {
      uid: null,
      user: null,
      mail: null,
    }
  },
  actions: {
    async onAuthStateChangedAction(state, { authUser }) {
      if (!authUser) {
        state.commit('SET_MAIL', null);
        this.$router.push({
          path: '/'
        })
      } else {
        const { uid, email } = authUser;
        state.commit('SET_MAIL', {
          uid,
          email
        });
        this.$router.push({
          path: '/'
        })
      }
    }
  },
  mutations: {
    SET_UID_AND_MAIL(state, obj) {
      state.mail = obj.mail;
      state.uid = obj.uid;
    },
  },
  getters: {
    getUser: (state) => {
      return state.mail.split('@')[0];
    }
  }
});

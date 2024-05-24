export default{
  state: {
    pathmaks: 1,
    dataGalery: null,
    allData:null
  },
  mutations: {
    incrementPathmaks(state) {
      let maksdata=state.allData

      if(state.pathmaks==maksdata?.length){
      }else{

        state.pathmaks++;
      }
    },
    incrementPathmaksMin(state) {
      if(state.pathmaks>1){

        state.pathmaks--;
      }{
      }
    },
    SET_DATA(state, data) {
      state.dataGalery = data
    },
    SET_DATA_ALL(state, data) {
      state.allData = data

    }
  },
  actions: {
    incrementPathmaks({ commit }) {
      commit('incrementPathmaks');
    },
    incrementPathmaksMin({ commit }) {
      commit('incrementPathmaksMin');
    },
    async fetchData({ commit ,state}, data) {
      const datapath=state.pathmaks
      try {
        const response = await this.$axios.$get('datajson/image.json');
        commit('SET_DATA', response?.data[data ==1?0:data-1]);
        commit('SET_DATA_ALL', response?.data);
        console.log('nu',response?.data[data ==1?0:data]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error jika diperlukan
      }
    }
  },
  getters: {
    getPathmaks: state => state.pathmaks,
    getGaleryData: state => state.dataGalery
  }
}

import galleryFallback from '~/static/datajson/image.json'

export const state = () => ({
  activeAlbumId: 1,
  allData: [],
  isLoading: false,
  error: null,
})

export const mutations = {
  SET_ACTIVE_ALBUM_ID(state, albumId) {
    const total = state.allData.length || 1
    const parsed = parseInt(albumId, 10)
    if (Number.isNaN(parsed) || parsed < 1) {
      state.activeAlbumId = 1
    } else if (parsed > total) {
      state.activeAlbumId = total
    } else {
      state.activeAlbumId = parsed
    }
  },
  SET_ALL_DATA(state, albums) {
    state.allData = Array.isArray(albums) ? albums : []
  },
  SET_LOADING(state, loading) {
    state.isLoading = loading
  },
  SET_ERROR(state, error) {
    state.error = error
  },
}

export const actions = {
  async fetchGallery({ commit, state }, albumId = 1) {
    // Use cached gallery JSON when already loaded
    if (state.allData.length > 0) {
      commit('SET_ACTIVE_ALBUM_ID', albumId)
      return state.allData
    }

    commit('SET_LOADING', true)
    commit('SET_ERROR', null)

    try {
      let albums = []
      if (process.server) {
        albums = Array.isArray(galleryFallback && galleryFallback.data)
          ? galleryFallback.data
          : []
      } else {
        const response = await this.$axios.$get('/datajson/image.json')
        albums = Array.isArray(response && response.data) ? response.data : []
      }
      commit('SET_ALL_DATA', albums)
      commit('SET_ACTIVE_ALBUM_ID', albumId)
      return albums
    } catch (error) {
      const fallbackAlbums = Array.isArray(galleryFallback && galleryFallback.data)
        ? galleryFallback.data
        : []
      if (fallbackAlbums.length) {
        commit('SET_ALL_DATA', fallbackAlbums)
        commit('SET_ACTIVE_ALBUM_ID', albumId)
        return fallbackAlbums
      }
      commit('SET_ERROR', 'Gagal memuat data galeri. Silakan coba lagi.')
      return []
    } finally {
      commit('SET_LOADING', false)
    }
  },
  setActiveAlbum({ commit }, albumId) {
    commit('SET_ACTIVE_ALBUM_ID', albumId)
  },
}

export const getters = {
  getPathmaks: (state) => state.activeAlbumId,
  getAllAlbums: (state) => state.allData,
  getTotalAlbums: (state) => state.allData.length,
  getGaleryData: (state) => {
    if (!state.allData.length) return null
    const index = Math.min(
      Math.max(state.activeAlbumId - 1, 0),
      state.allData.length - 1
    )
    return state.allData[index] || null
  },
  getSubGalleryPhotos: (state, getters) => {
    const album = getters.getGaleryData
    if (!album || !album.subgalery || !Array.isArray(album.subgalery.sub1)) {
      return []
    }
    return album.subgalery.sub1
  },
  isLoading: (state) => state.isLoading,
  getError: (state) => state.error,
}

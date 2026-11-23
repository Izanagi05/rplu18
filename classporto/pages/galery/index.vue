<script>
export default {
  name: 'GalleryIndexRedirect',
  middleware({ redirect }) {
    return redirect('/galery/1')
  },
}
</script>

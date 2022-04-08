<script>
import { categories } from '~/common/api'

export default {
  name: 'HomeView',
  fetch({ redirect }) {
    redirect('/category/' + categories[0])
  },
}
</script>
<script>
import { categories } from '~/common/api'

export default {
  name: 'RedirectorPage',
  asyncData({ redirect }) {
    redirect(`/category/${categories[0]}`)
  },
}
</script>
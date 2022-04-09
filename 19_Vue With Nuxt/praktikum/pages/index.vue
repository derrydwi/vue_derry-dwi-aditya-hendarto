<script>
import { menus, categories } from '~/common/api'

export default {
  name: 'RedirectorPage',
  asyncData({ redirect }) {
    redirect(`/${menus[0]}/${categories[0]}`)
  },
}
</script>
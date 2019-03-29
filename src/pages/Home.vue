    <template>
    <div>
        <ActivityLayout/>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ActivityLayout from '../components/activity/ActivityLayout'
export default {
    name: 'Home',
    components: {
        ActivityLayout
    },
    computed: mapState(['user'])
}
</script>
<style scoped>

</style>


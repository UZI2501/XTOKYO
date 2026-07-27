import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import CommentsConstructor from "./quartz/components/Comments"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()


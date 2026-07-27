// quartz/components/Comments.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((() => {
    const Comments: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
        // indexページ（トップページ）にはコメント欄を出さない設定
        if (fileData.slug === "index") {
            return null
        }

        // STEP 1で取得した自分のapp-idをここに貼り付けます
        const appId = "7f45d99b-8b20-44b3-a04d-dbd03a8169a9"

        return (
            <div class={`comments ${displayClass ?? ""}`}>
                <h2>コメント</h2>
                <div
                    id="cusdis_thread"
                    data-host="https://cusdis.com"
                    data-app-id={appId}
                    data-page-id={fileData.slug}
                    data-page-url={`https://xtokyo-wiki.pages.dev/${fileData.slug}`}
                    data-page-title={fileData.frontmatter?.title ?? fileData.slug}
                ></div>
                <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
            </div>
        )
    }

    return Comments
}) satisfies QuartzComponentConstructor)
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Comments: QuartzComponent = ({ fileData, displayClass }) => {
    if (fileData.slug === "index") {
        return null
    }

    const appId = "7f45d99b-8b20-44b3-a04d-dbd03a8169a9"
    const host = "https://cusdis.com"
    const pageUrl = `https://xtokyo-wiki.pages.dev/${fileData.slug}`
    const pageTitle = fileData.frontmatter?.title ?? fileData.slug

    return (
        <div class={`comments ${displayClass ?? ""}`}>
            <h2>コメント</h2>
            <div
                class="cusdis-container"
                data-app-id={appId}
                data-host={host}
                data-page-id={fileData.slug}
                data-page-url={pageUrl}
                data-page-title={pageTitle}
            >
                <div class="cusdis-list"></div>
                <form class="cusdis-form">
                    <textarea
                        class="cusdis-input"
                        placeholder="コメントを入力..."
                        rows={4}
                        required
                    ></textarea>
                    <div class="cusdis-form-footer">
                        <span class="cusdis-status"></span>
                        <button type="submit">送信</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default (() => Comments) satisfies QuartzComponentConstructor

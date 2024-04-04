import CodeSnippet from "./CodeSnippet";
import Example from "./Example";
import '/src/styles/demo.css'

function Demo() {
    return (
        <section className="demo">
            <div className="demo_title">
                <h2>Demo</h2>
            </div>
            <div className="demo_info">
                <p>
                    Below is a quick demo of what you can do with this API and the kind of assets we provide. If you need help using this API read the documenation here.</p>
                <p>
                    All the assets and character info in this info card are from the API via HTTP fetch request.
                </p>
            </div>
            <Example />
            <CodeSnippet />
        </section>
    )
}

export default Demo
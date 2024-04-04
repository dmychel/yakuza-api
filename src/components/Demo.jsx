import CodeSnippet from "./CodeSnippet";
import Example from "./Example";
import '/src/styles/demo.css'

function Demo() {
    return (
        <section className="demo">
            <h2>Demo</h2>
            <p>Below is a quick demo of what you can do with this API and the kind of assets we provide. If you need help using this API read the docunenation here.</p>
            <CodeSnippet />
            <Example />
        </section>
    )
}

export default Demo
import { useState } from 'react'

import '/src/styles/form.css'
import PropTypes from 'prop-types'

function FetchForm({ handleSubmit }) {
    const [value, setValue] = useState('')

    return (
        <section className="form">
            <p>You can send a fetch request and see the JSON data response. Try searching for a character by submitting an item number</p>
            <p>e.g. <span style={{ color: "blue" }}>https://rest-api-jvtz.onrender.com/character/</span><span style={{ color: 'white', fontFamily: 'Yakuza', fontSize: '1.5rem', WebkitTextStroke: '1px black', letterSpacing: '2px' }}>22</span></p>
            <form onSubmit={(e) => handleSubmit(e, value)}>
                <label>https://rest-api-jvtz.onrender.com/character/</label>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </section>
    )
}

FetchForm.propTypes = {
    handleSubmit: PropTypes.func,
}

export default FetchForm
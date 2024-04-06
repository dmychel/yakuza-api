import { useState } from 'react'

import '/src/styles/form.css'
import PropTypes from 'prop-types'

function FetchForm({ handleSubmit }) {
    const [value, setValue] = useState('')

    return (
        <section className="form">
            <p>Below you can send a fetch request and see the data response</p>
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
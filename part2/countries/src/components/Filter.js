
const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label>Find countries </label>
            <input type="text" onChange={onChange} value={value} />
        </div>
    )
}

export default Filter
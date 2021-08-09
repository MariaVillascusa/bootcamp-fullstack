
const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label>Find countries </label>
            <input type="text" onChange={onChange} value={value} placeholder="countries..." />
        </div>
    )
}

export default Filter
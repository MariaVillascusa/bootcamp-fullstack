
const Filter = ({ findPerson, findValue }) => {
    return (
        <div>
            <label>Filter shown with</label>
            <input type="text" onChange={findPerson} value={findValue} />
        </div>
    )
}

export default Filter
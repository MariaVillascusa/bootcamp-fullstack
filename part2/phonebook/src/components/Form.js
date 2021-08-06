
const Form = ({ onSubmit, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input type="text" value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input type="text" value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form
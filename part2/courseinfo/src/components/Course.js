const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => {
    const content = course.parts.map((part) => <Part part={part} key={part.id} />)
    return content;
}

const Total = ({ course }) => {
    const total = course.parts.reduce(
        (prev, current) => prev + current.exercises,
        0
    );
    return <p><strong>Total of {total} exercises</strong></p>;
};

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course
const Total = (props) => {
    const parts = props.parts

    let total = 0;
    for(let i = 0; i < parts.length; i++) {
        total = total + parts[i].exercises
    }

    return (
        <div>
            <p>
            Number of exercises {total}
            </p>
        </div>
    )
}

export default Total;
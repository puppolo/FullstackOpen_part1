const Part = (props) => {
    const _part = props.part
    const _ex = props.ex
    return (
        <div>
            <p>{_part} {_ex}</p>
        </div>
    )
}

export default Part;
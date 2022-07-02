import Part from './Part'

const Content = (props) => {
    //console.log(props)
    const parts = props.parts

    return (
        <div>
            {parts.map((e) => <Part part={e.name} ex={e.exercises}></Part>)}
        </div>
    )
}

export default Content;
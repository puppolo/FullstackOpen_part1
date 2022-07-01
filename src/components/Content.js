import Part from './Part'

const Content = (props) => {
    return (
        <div>
            <Part part={props.p1} ex={props.ex1}/>
            <Part part={props.p2} ex={props.ex2}/>
            <Part part={props.p3} ex={props.ex3}/>
        </div>
    )
}

export default Content;
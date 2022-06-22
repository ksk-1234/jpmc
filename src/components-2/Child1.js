

function Child1( props)
{
    return (
        <div className="bg-secondary">
            <h1>child1 component</h1>
            <h3 className="text-secondary">{props.username}</h3>
        </div>
    )

}
export default Child1;
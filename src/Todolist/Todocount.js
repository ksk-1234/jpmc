import React from "react";
function Todocount({todos})
{
    return(
        <div>
        <h1>todocount </h1>
        <h1 className="text-center">{todos.length}</h1>
        </div>
    );
}
export default Todocount
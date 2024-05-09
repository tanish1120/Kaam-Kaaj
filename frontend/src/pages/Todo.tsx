import { useParams } from "react-router-dom";
import { FullTodo } from "../components/FullTodo";
import { useTodo } from "../hooks"
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";

export const Todo = () => {

  const {id} = useParams();

  const {todo,loading} = useTodo({
    id: id || ""
  });
  
  if(loading || !todo){
    return(
      <div>
        <Appbar/>
        <div className="h-screen w-full flex justify-center items-center">
          <Spinner/>
        </div>
      </div>
    )
  }
  return (
    <div>
      <FullTodo todo={todo}/>
    </div>
  )
}

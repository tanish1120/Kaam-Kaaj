import { Appbar } from "../components/Appbar"
import { TodoCard } from "../components/TodoCard"
import { TodoSkeleton } from "../components/TodoSkeleton";
import { useTodos } from "../hooks"

export const Todos = () => {
    const { loading , todos } = useTodos();

    if(loading){
        return<div>
            <Appbar/>
            <div className="flex justify-center">
                <div>
                    <TodoSkeleton/>
                    <TodoSkeleton/>
                    <TodoSkeleton/>
                    <TodoSkeleton/>
                    <TodoSkeleton/>
                    <TodoSkeleton/>
                </div>
            </div>
        </div>
    }

  return (
    <div>

        <Appbar/>
    
        <div className="flex justify-center">
            <div>
                {
                    todos.map(todo =><TodoCard 
                        
                        title={todo.title}
                        content={todo.content}
                        id={todo.id}
                        completed={todo.completed}
                    />)
                    
                    
                }
            </div>
        </div>
    </div>
    
  )
}

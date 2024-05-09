import { Todo } from "../hooks"
import { Appbar } from "./Appbar"

export const FullTodo = ({todo}: {todo: Todo}) => {

    return(
        <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                    <div className=" col-span-8">
                        <div className="text-5xl font-extrabold">
                            {todo.title}
                        </div>
                        {/* <div className="text-slate-500 pt-2">
                            Posted on 2nd Dec
                        </div> */}
                        <div className="text-xl pt-4">
                            {todo.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        
                        
                        <div className="flex">
                            
                            <div>
                                <div className="text-xl font-bold">
                                    Status:
                                </div>
                                <div className="pt-2 text-slate-500">
                                    {todo.completed? "Completed":"Incomplete"}
                                </div>
                                <button type="button" className="mt-5 py-2 px-4 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Mark as {todo.completed?"Incomplete":"Complete"}</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        
    )
}
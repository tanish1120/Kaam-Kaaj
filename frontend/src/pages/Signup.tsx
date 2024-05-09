import { Quote } from "../components/Quote"
import { SingupAuth } from "../components/SignupAuth"

export const Signup = () => {
    return <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
            <SingupAuth/>
        </div>
        <div className='  hidden lg:block'>
            <Quote/>
        </div>
  </div>
}
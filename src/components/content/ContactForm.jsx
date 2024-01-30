import { useState } from "react";
import axios from 'axios';

export default function ContactForm()
{


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);



const handleName = ((e)=>{


setName(e.target.value)

})

const handleEmail = (e) => {
  setEmail(e.target.value);
};

const handleMessage = (e) => {
  setMessage(e.target.value);
};

const handleSubmit = ((e)=>{

e.preventDefault()

setError('')
setResponse('')


if(!name||!email||!message){
    setError('Please, make sure the form is filled properly.')
    return
}


const exportData = {name,email,message}


const sendMessage = async () =>{   
try{
    setLoading(true)
    const send = await axios.post("http://localhost:5005/contact", exportData)
    setResponse(send.data)
    setLoading(false)

} catch(err){


       if (err.response && err.response.data && err.response.data.message) {
        const errorMessage = err.response.data.message;
         setError(errorMessage);
         setLoading(false)
       } else {
         setError("An error occurred while processing your request.");
         setLoading(false);
       }

}}

sendMessage()

})









return (
  <>
    <div className=" w-full h-full text-xl">
      <h1 className="text-center font-medium m-4">Get in touch</h1>
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        className=" w-full h-full flex flex-col justify-start text-xl">
        <div>
          <label htmlFor="name">
            {" "}
            <h3 className="md:m-4">Your name</h3>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleName}
            className="block p-2.5 invalid:bg-gray-100 md:w-1/4 md:m-4
            text-sm text-gray-900 rounded-lg 
            border-purple-300 border-b-2
            fo"
            required></input>
        </div>

        <div>
          <label htmlFor="email">
            <h3 className="md:m-4">Your email</h3>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            required
            onChange={handleEmail}
            className="block p-2.5 invalid:bg-gray-100 md:w-1/4 md:m-4 
            text-sm text-gray-900 rounded-lg 
            border-purple-300 border-b-2
            fo"></input>
        </div>

        <div>
          <textarea
            form="contactForm"
            value={message}
            name="message"
            required
            rows="4"
            onChange={handleMessage}
            className="block p-2.5 md:m-4 w-full md:w-3/4 mt-4
            text-sm text-gray-900 rounded-lg invalid:bg-gray-100
            border-purple-300 border-2"
            placeholder="Write your message here..."></textarea>
        </div>
        {response ? (
          <article className="mt-3 self-center p-1 animate-pulse  border-dotted border-green-500 text-sm text-green-500 rounded-lg border-2">
            <p>{response}</p>
          </article>
        ) : null}
        {error ? (
          <article className="mt-3 self-center p-1 animate-pulse  border-dotted border-red-400 text-sm text-red-400 rounded-lg border-2">
            <p>{error}</p>
          </article>
        ) : null}
        <button
          type="submit"
          className="rounded-lg p-2 self-center mt-4 bg-gray-100 hover:bg-gray-200 focus:bg-gray-300">
          {loading?'...':'Send'}
        </button>
      </form>
    </div>
  </>
);
}
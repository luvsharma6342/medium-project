import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-5xl w-full">
          <input onChange={(e) => {
            setTitle(e.target.value)
          }} type="text" className="w-full bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-1" placeholder="Title"></input>
          <TextEditor onChange={(e) => {
            setDescription(e.target.value)
          }} />
          <button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
              title, content: description
            }, {
              headers: {
                Authorization: localStorage.getItem("token")
              }
            });
            navigate(`/blog/${response.data.id}`)
          }} type="submit" className="bg-green-500 text-shadow-black cursor-pointer box-border border border-transparent hover:bg-brand-strong focus:ring-2 shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">Publish post</button>
        </div>
      </div>
    </div>
  )
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (

    <form>
      <div className="w-full mt-4 mb-4 border border-default-medium rounded-lg outline-none">
        <div className="px-4 py-2 outline-none">
          <textarea onChange={onChange} rows={8} id="editor" className="block w-full px-0 text-sm text-gray-800 bg-white border-0 outline-none" placeholder="Write an article..." required ></textarea>
        </div>
      </div>
    </form>

  )
}

export default Publish

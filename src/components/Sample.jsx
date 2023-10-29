import { useSelector } from "react-redux"

const Sample = () => {
  const name = useSelector((state => state.user))
  return (
    <div>
      <p>
        <span className=" fw-bold bg-black">
          Name from store:
        </span>
        {name.name}
      </p>     
      <p>
        <span className="fw-bold bg-black">
          Name from store:
        </span>
        {name.email}
     </p>

    </div>

  )
}

export default Sample;

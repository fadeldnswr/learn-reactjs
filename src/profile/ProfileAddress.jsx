import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"


const ProfileAddress = () => {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h1>Profile Address</h1>
      <p>Alamat : {profile}</p>
    </div>
  )
}

export default ProfileAddress;
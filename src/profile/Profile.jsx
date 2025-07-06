import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"


const Profile = () => {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h1>Profile Address</h1>
      <p>Profile : {profile}</p>
    </div>
  )
}

export default Profile;
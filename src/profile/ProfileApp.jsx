import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

const ProfileApp = () => {
  return (
    <div>
      <ProfileContext.Provider value="Cluster Edelweiss">
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  )
}

export default ProfileApp;
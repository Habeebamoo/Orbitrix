import DroneLogistics from "./BlogContents/DroneLogistics"
import RobotDogs from "./BlogContents/RobotDogs"

const BlogContent = ({ sku }: { sku: string }) => {
  if (sku == "robot-dogs") {
    return <RobotDogs />
  } else if (sku == "drone-logistics") {
    return <DroneLogistics />
  }
}

export default BlogContent
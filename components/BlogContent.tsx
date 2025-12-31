import RobotDogs from "./BlogContents/RobotDogs"

const BlogContent = ({ sku }: { sku: string }) => {
  if (sku == "robot-dogs") {
    return <RobotDogs />
  }
}

export default BlogContent
import { getComputers } from "../services"

export  const checkTagExists = async ( tag ) => {
    const computers = await getComputers()
    return computers.some( computer => computer.tag === tag )
}
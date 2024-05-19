import fullLevelCreator from "./fullLevelCreator"
import type { gameSet, level } from "../types"

type allLevelsCreator = (gss: gameSet[]) => level[]

const allLevelsCreator = (gss: gameSet[]) => {

return gss.map( gs => (fullLevelCreator(gs)))
}

export default allLevelsCreator

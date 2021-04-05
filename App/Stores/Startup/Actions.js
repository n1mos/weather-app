import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  startup: [],
})

export const StartupTypes = Types
export default Creators

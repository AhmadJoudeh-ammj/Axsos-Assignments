import { createContext } from 'react';

// Create a new context object.
// We can optionally pass a default value here, but we will provide it
// at the top level in our Wrapper component instead.
const UserContext = createContext();

export default UserContext;
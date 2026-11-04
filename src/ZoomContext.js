import { createContext, useContext } from 'react';

export const ZoomContext = createContext(() => {});
export const useZoom = () => useContext(ZoomContext);

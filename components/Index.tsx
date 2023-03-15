import dynamic from "next/dynamic"


/*
 * User to disable Server Side Render 
 * And with this we solve "Windows is not defeine" error
 */

const Map = dynamic(() => import('./Map'),{
  ssr: false
})



export default Map
import dynamic from "next/dynamic"


/*
 * User to disable Server Side Render 
 * And with this we solve "Windows is not defeine" error
 */

const LeafletMap = dynamic(() => import('./Map'), { ssr: false })



export default LeafletMap
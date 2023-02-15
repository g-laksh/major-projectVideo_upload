import { useEffect ,useRef } from 'react';


const UploadWidget = () => {
    const cloudinaryRef =useRef ();
    const widgetRef = useRef();

  useEffect(() => {
    // Store the Cloudinary window instance to a ref when the page renders

    cloudinaryRef.current = window.cloudinary;
    widgetRef.current=cloudinaryRef.current.createUploadWidget({
        cloudName: 'dujbzx9dx',
        uploadPreset: 'wn390suc'

    }, function (error, result) {
        console.log(result);
      })
    
  }, []);
return(
    <button onClick={() => widgetRef.current.open()}>Upload</button>
)
}

export default UploadWidget;
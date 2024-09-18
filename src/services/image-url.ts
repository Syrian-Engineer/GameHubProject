import NoImage from '../assets/no-image-placeholder-6f3882e0.webp'


const getCroppedImage = (url:string)=>{
    if (!url) return NoImage
    const target = 'media/'
    const index = url.indexOf(target)+target.length
    return url.slice(0,index) +'crop/600/400/'+url.slice(index)

}
export default getCroppedImage
function Footer(){
    
    const liveYear =new Date().getFullYear();
    return(
    <footer>
     <p>Copyright © {liveYear}</p>
    </footer>
    )
   }
export default Footer;
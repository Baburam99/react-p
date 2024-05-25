import './service.css'
function Services(){

    return(
        <>
        <section className='services'>
            <div className="service-box">
            <div className="services-left">
           <img src="https://media.licdn.com/dms/image/C4D12AQHa_ZJ2PpTPBw/article-cover_image-shrink_600_2000/0/1520059027184?e=2147483647&v=beta&t=DsaNm4oCDi_3izWWBwGvtcoitLsFIgKxIwj2ldggX08" alt="Service One" />
            <h2>Fixing Errors in HTML, CSS</h2>
            <p>I will Fix any errors in your Html and Css files. Checkout my Gig for more Information</p>
            <a href="https://www.fiverr.com/baburam1221/clean-the-spreadsheet-microsoft-excel"target='_blank'> <button>View GIG</button></a>
            </div>

            <div className="services-right">
           <img src="https://149842030.v2.pressablecdn.com/wp-content/uploads/2019/07/Ronin-free-personal-portfolio-website-template.png" alt="Service two" />
           <h2>Portfolio Websites</h2>
            <p>I will create Small scale Website like Portfolio Website. For More Information checkout my Gig</p>
            <a href="https://www.fiverr.com/baburam1221/small-website-with-html-css-and-java-script"target='_blank'> <button>View GIG</button></a>
            </div></div>
            <div className="hire-box">
       <a class="HireA" href="https://www.fiverr.com/baburam1221" target='_blank'> <button className="hire">Hire Me!</button></a>
       </div>
        </section>
        </>
    )
}
export default Services
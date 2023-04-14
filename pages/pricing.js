import commonStyle from "../styles/common.module.css"
import { useRouter } from 'next/router'


export default function PricingPage() {
  const router = useRouter()

  return <div> 
  <div className={commonStyle.main_content}>
    <div className={commonStyle.main_content_subwrapper}>
    <p className={commonStyle.main_content_header}>  AS/SO</p>
    <p className={commonStyle.main_content_subheader}>  Creative agency since 2006</p>
    <div className={commonStyle.buttons_wrapper}>
    <button onClick={()=> router.push("./services")} className={commonStyle.button_services}>OUR SERVICES</button>
            <button onClick={()=> router.push("./contact")} className={commonStyle.button_hereus}>HERE US NOW!</button>
          </div>
    </div>
    <p className={commonStyle.nav_data}> Pricing page</p>
</div>
  </div>;
  }


  
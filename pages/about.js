import { useRouter } from "next/router";
import commonStyle from "../styles/common.module.css"


export default function AboutPage() {
  const router = useRouter()

    return <div> 
      <div className={commonStyle.main_content}>
        <div className={commonStyle.main_content_subwrapper}>
        <p className={commonStyle.main_content_header}>  AS/SO</p>
        <p className={commonStyle.main_content_subheader}>  Creative agency since 2006</p>
        <div className={commonStyle.buttons_wrapper}>
            <button className={commonStyle.button_services}>OUR SERVICES</button>
            <button className={commonStyle.button_hereus}>HERE US NOW!</button>
          </div>
        </div>
        <p className={commonStyle.nav_data}> About page</p>
       </div>
      </div>;
  }
  
import global from "../../assets/styles/global.module.css"
import styles from "./LandingPage.module.css"

import Benefits from "../../components/benefits/Benefits.tsx"
import Brief from "../../components/brief/Brief.tsx"
import Footer from "../../components/footer/Footer.tsx"
import Form from "../../components/form/Form.tsx"
import Hero from "../../components/hero/Hero.tsx"
import Introduction from "../../components/introduction/Introduction.tsx"

function LandingPage(){
    return (
        <>
            <Hero></Hero>
            <Introduction></Introduction>
            <Benefits></Benefits>
            <Brief></Brief>
            <Form></Form>
            <Footer></Footer>
        </>
    )
}

export default LandingPage;
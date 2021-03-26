import React, { useEffect, useState } from 'react'
// import './itemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting /* greeting:saludo Asigna greeting a una variable llamada saludo*/ }) => {

    const agregar = (num) => console.log(`Se Agrego un Item. Cantidad: ${num}`)

    const [items, setItems] = useState([])

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([
                    { imagen: "https://lh3.googleusercontent.com/au2S1WrdlJemlNgIEOnLOSEgoIV-l13ApIxT9g4u2p4puyJVPPeqR82-CrGfnwo2JVyVm9kK1kDJioBFwzeKLO4Y_1H9V82e9n5of5YgDyw5dRTJC5mgJKZdVYgtS25JR3NkueNyUVKnFMXwkzrygFbAg70ZiLVoMxsgsAAtvXYw-vI8WvfZTJYOqLazEt8k03XPMtonwN7N9DbhHticEX6OP8MVRYC6ESy9NKhbx-fDQb3XK5KGf73ky50i_KtmpdaUf-mwW3RxWHTklzobuLpL4OWDhFkAbxZuhbYrupGHeUuKpSTpj4DTExcRvDBxNt3zXe8nJFipY3rQG65wOG8uO_WtyjAmwalz-5Sc29b4m4uKFvymn3LeQR4R8YAKdgoBP9Pe16nImGYz8OiEJ9fSUqNOZ0rynZ01PEp9ozL-CUBRR1Zt3WQeRA5S2YmA4lSec0Y2dhg0mqVGdrRZPm8nX-k_HQfI15gciSuwbbN-WperkzC10tPpTJUCDItjrd_QBzz_qepD3Op1iv2j2M3RYV2x-DNrL1TKuELHJ9GHE2Hx6zhy24Q3NQPT-VQV9R2oQZMPWSeu8XUyYFosxWG_qlOEMB3qeo0JVXuEuqL6g6rlrd1wlLA_nVNsMkxwj83ywJGw3b3hBScimQu635DtVQIcQahL06OD-ywso22i6r7LkiiuidE1ypvl8VKonF6VGVvwy_NqcNKmv4nGMcxD=w615-h937-no?authuser=1", 
                    titulo: "Cartero", autor: "Charles Bukowski", precio: "1000", id: "1" },
                    { imagen: "https://lh3.googleusercontent.com/W8y1TcdV89bQfxFNTGZaGTSXTjB0eL9oKeS5_TJB15_Z8EhWVgU35d5KGOYgvE6CQkWIWqQXpsIpxir1GxcrYOPCasUDYBmez7gk-EDZtaCO8CWobMFZLCkeJj2HK6G2aUYNuAUpOh8MzH3VtneM9jtIFQDC9fUk_izhXObw6h0nHQplG5751JUp5U-MXytkXf8yWboa8aLfq9nT_9Q-ZR8tg48G3n_vZq5VQDtlYaiM7xFceJm_bv42NJkoYT9SVJx4X7aB_yf_D9fw08UVqLMx8Cge-8B8UfuyrUClVPFCOXBpPqhQ1iyf6vuMA40OSsDjThiztKXotwlCqd0VZCHQau59nlq_f7yPKwno6GKrOUkiQ-kBVxI_doSvw4xVLWCnQvNNRtPOiHeFF2MWp2E50sWKziYFUuBv9UU2aMIq2I50AODKUddtPZ0mo8gHM8q4sxVmawR1WuAMVDhLxXC81FzIsKLo6VftiL7MlpZU9eOxcatdRGmaBRAnnhY40Hw6QxFAxjpZV_SYc_sveUyolhjBUEifJPpvh1NLmBlnFn0XHUspwiTWpGtaDDROHUep28ZezPA4yoR0cqkR6yDMrW34e3V8lz-yS2cl2Gyefli_EyuidAxZOcRzhZFdtB0areRFfA_zbqJCfGF6N5E5dfpoXFY9l3EP4yNobzKw2e8u9C56i4MKFRUD-20oW7c4gy1llPmY2EK8Cy3yO53G=w615-h937-no?authuser=1", 
                    titulo: "Viajes por el scriptorum", autor: "Paul Auster", precio: "1400", id: "2" },
                    { imagen: "https://lh3.googleusercontent.com/Smrlalt3Z0b0RHSY2yChRUvB2rlm9wW3Rggkl2IgvK9U4AtnH13ZVDglD2RNunFb1of-fqDC0TibqDcpVf7xd5P__97fKcLGv7zeR8-ONqvOPSN7cEFu6tGDJ4vOiK6T-Tn6hCbjXTR8MO3Tq2kAwNYoO2voLKwbon3XUf1YqHzc33OcMC4DtAJK0drrXjPr8seBLm0Inu4PZExf7kLnW2mr7TZDEhPIly9Y6xHhmZTSBoqjLBwWB9F2UESvnmoauN6Gch-Zuf_uaiA6S7n6SjzB7K5583RTRWAMGO5nXPDxzEtm7uS1XW7aipfNh6O2W3Oei8CiuVVh0Oy-Z-GizEpK7XpnHf14K69T_3z-AmIrS5AgN63fQBdWThsTWKBsakGQqX-JQdto1BKehJsHJqndnnRdp1-bt5CXQHZ16OxEQCnT5sBoELT-RQTdU_T7F_Y2TGGcKVNBAhIbKqOL405vBl0yxBxK5JnWQxriE4vN4wOv4iXJY-vkhGCFFTzhfFFmARj-JlXin_y5-OEvw7eqoVMhDxM9my7Ll7h095waH4N3GVKpkeGD-apBDQ1TUllIMK9ntd-rxBogLsaX3VSa2_8sgyRp78_C9XGSfrwKajhTi0j88pVBMwhT0UQAwSqXtsjX2ZQW7m8q4agdgrB-opoExHNzyDhXmp8h32oIui-I_B05TRSXXzt98_o0sG3GOK9LCIuaOh-Az3jkGXYd=w615-h937-no?authuser=1", 
                    titulo: "Seda", autor: "Alessandro Baricco", precio: "900", id: "3" }
                ])
            }, 2000)
        })

        promesa.then((resultado) => {
            setItems(resultado)
        })
    })

    return (
        <div className="container ">
            <p>
                {greeting}
            </p>

            <ItemList items={items} />

            <ItemCount initial={1} stock={10} onAdd={agregar} />
        </div>
    );
}

export default ItemListContainer;

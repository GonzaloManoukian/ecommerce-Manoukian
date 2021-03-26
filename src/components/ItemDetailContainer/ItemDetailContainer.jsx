import React, { useEffect, useState } from 'react'
// import './itemListContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({ greeting /* greeting:saludo Asigna greeting a una variable llamada saludo*/ }) => {

    const [item, setItem] = useState([])

    useEffect(() => {

        const promesa = new Promise((resolve) => {

            setTimeout(() => {
                resolve(
                    {
                        imagen: "https://lh3.googleusercontent.com/au2S1WrdlJemlNgIEOnLOSEgoIV-l13ApIxT9g4u2p4puyJVPPeqR82-CrGfnwo2JVyVm9kK1kDJioBFwzeKLO4Y_1H9V82e9n5of5YgDyw5dRTJC5mgJKZdVYgtS25JR3NkueNyUVKnFMXwkzrygFbAg70ZiLVoMxsgsAAtvXYw-vI8WvfZTJYOqLazEt8k03XPMtonwN7N9DbhHticEX6OP8MVRYC6ESy9NKhbx-fDQb3XK5KGf73ky50i_KtmpdaUf-mwW3RxWHTklzobuLpL4OWDhFkAbxZuhbYrupGHeUuKpSTpj4DTExcRvDBxNt3zXe8nJFipY3rQG65wOG8uO_WtyjAmwalz-5Sc29b4m4uKFvymn3LeQR4R8YAKdgoBP9Pe16nImGYz8OiEJ9fSUqNOZ0rynZ01PEp9ozL-CUBRR1Zt3WQeRA5S2YmA4lSec0Y2dhg0mqVGdrRZPm8nX-k_HQfI15gciSuwbbN-WperkzC10tPpTJUCDItjrd_QBzz_qepD3Op1iv2j2M3RYV2x-DNrL1TKuELHJ9GHE2Hx6zhy24Q3NQPT-VQV9R2oQZMPWSeu8XUyYFosxWG_qlOEMB3qeo0JVXuEuqL6g6rlrd1wlLA_nVNsMkxwj83ywJGw3b3hBScimQu635DtVQIcQahL06OD-ywso22i6r7LkiiuidE1ypvl8VKonF6VGVvwy_NqcNKmv4nGMcxD=w615-h937-no?authuser=1",
                        titulo: "Cartero", autor: "Charles Bukowski", precio: "1000", desc: "Charles Bukowski, escritor eminentemente autobiográfico, nos cuenta en esta obra otro fragmento de la vida de su alter ego Chinaski. En \"Cartero\" describe los doce años en que estuvo empleado en una sórdida oficina de correos de Los Ángeles. El libro termina cuando Chinaski/Bukowski abandona la miserable seguridad de su empleo, a los 49 años, para dedicarse exclusivamente a escribir. Y escribe \"Cartero\", su primera novela.", id: "1"
                    },
                )
            }, 2000)
        })

        promesa.then((resultado) => {
            setItem(resultado)
        })
    })

    return (
        <div className="container">

            <ItemDetail item={item} />

        </div>
    );
}

export default ItemDetailContainer;

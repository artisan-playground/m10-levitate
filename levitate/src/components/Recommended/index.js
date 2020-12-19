import React from 'react'
import RecImages from '../../assets/18311.png'
import { ContainerRec, ImagesRec, ImagesDetails } from './RecommendedElements'

const Recommended = () => {
    return (
        <ContainerRec>
            <ImagesRec>
                <img src={RecImages} />
            </ImagesRec>
            <ImagesDetails>
                <p>Nulla feugiat sem sit amet neque porttitor blandit. Mauris ac leo faucibus, blandit lacus sit amet, malesuada ante. In velit felis, convallis a sem et, egestas dictum lectus. Etiam vitae mattis elit. In id sapien ac lorem ultricies imperdiet. Curabitur a rutrum elit, in condimentum leo. Aenean ullamcorper mi est, quis maximus odio imperdiet et. Pellentesque sit amet volutpat diam. Praesent ut efficitur lacus. Suspendisse porta dui nec enim ultricies, vel feugiat nisi posuere. Donec ut nibh egestas, pharetra sapien a, iaculis metus. Maecenas sed interdum magna.</p>
            </ImagesDetails>
        </ContainerRec>
    )
}

export default Recommended
import React, { Component, PropTypes } from 'react';
import {Container} from '../../theme/grid.js';
import { 
    Image,
    MastelaImage,
    RevealP
} from './Home.style';




export default class Home extends Component {
    static propTypes = {};

    render(){
        return(
            <Container>
                <MastelaImage>
                    <h1>Felix</h1>
                    <h2>developer</h2>
                </MastelaImage>
                <h1>why is react hot loader not working plz</h1>
                {/*<Image src={require('../assets/mastela.jpg')} alt="mastela-image"/>*/}
                <RevealP>
                Do not go gentle into that good night,
                Old age should burn and rave at close of day;
                Rage, rage against the dying of the light.

                Though wise men at their end know dark is right,
                Because their words had forked no lightning they
                Do not go gentle into that good night.

                Good men, the last wave by, crying how bright
                Their frail deeds might have danced in a green bay,
                Rage, rage against the dying of the light.

                Wild men who caught and sang the sun in flight,
                And learn, too late, they grieved it on its way,
                Do not go gentle into that good night.

                Grave men, near death, who see with blinding sight
                Blind eyes could blaze like meteors and be gay,
                Rage, rage against the dying of the light.

                And you, my father, there on the sad height,
                Curse, bless, me now with your fierce tears, I pray.
                Do not go gentle into that good night.
                Rage, rage against the dying of the light.
                </RevealP>
            </Container>
        );
    }
}
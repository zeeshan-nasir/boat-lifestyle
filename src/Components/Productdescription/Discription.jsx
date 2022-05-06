import styled from "styled-components";

const Desc = styled.div`
    background-color:grey;
   
    text-align:center;
    color:white;
     padding:1%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  

    & h3{
        font-size:xx-large;
        
    }
    & p{
        width:90%;
        margin-left:5%;
        text-align:center;
    }`

export default function Description() {
    return (
        <Desc>
            <div>
            <h3>boAt Rockerz</h3>
            <p >it’s time to enjoy a playback experience like never before courtesy boAt stone 1200 14w portal wireless speaker with RCB LEDs. The RGB LEDs pave
the way for making the ambience suit a lot more to the music being played and  set the right vibe! its 14w thumping so sound with passive bass radiator
Offers sheer musical bilss. it supports instant wireless connectivity with bluetooth v5.0. Apart from the wireless connectivity, the user has other
Options in the form of AUX,USB and FM modes as well. The speakers pumps out nonstop audio for up to 9 hours on the single full charge w/o RGB LEDs
and upto 7 hours with the RGB LEDs. it’s a 360 degrees cylindrical construct with IPx7 rated water resistance a carefree listening time and carry strap for
and upto 7 hours with the RGB LEDs. it’s a 360 degrees cylindrical construct with IPx7 rated water resistance a carefree listening time and carry strap for
from those great features, the speaker also supports instant voice assistant via just a single tap</p>
</div> </Desc>
    );
}
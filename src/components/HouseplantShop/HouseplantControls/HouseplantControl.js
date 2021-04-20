import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPotSize from "../HouseplantPotSize/HouseplantPotSize"
import Button from "../../UI/Button/Button";
import soundRemove from "../../../audio/plant-sound.mp3"
// import soundAdd from "../../../audio/plant-sound-plus.mp3"


const HouseplantControl = ({type , addPot , removePot , count}) => {
    function removeSound() {
        let audio = new Audio();
        audio.preload ='auto';
        audio.src = soundRemove;
        audio.play();
    }
    // function addSound() {
    //     let audio = new Audio();
    //     audio.preload ='auto';
    //     audio.src = soundAdd;
    //     audio.play();
    // }
    return (
    <div className={classes.HouseplantControl}>
        <Button 
        className={classes.Button} 
        onClick={() => {addPot(type)}}>+</Button>
         <HouseplantPotSize type={type} />
        <Button 
        className={classes.Button} 
        onClick={() => {removePot(type) ; removeSound()}} disabled={!count}>-</Button>
    </div> );
}
 
export default HouseplantControl;
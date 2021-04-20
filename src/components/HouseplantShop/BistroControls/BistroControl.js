import classes from "../BistroControls/BistroControl.module.css";
import BistroMenuSize from "../BistroMenuSize/BistroMenuSize"
import Button from "../../UI/Button/Button";
import soundRemove from "../../../audio/plant-sound.mp3"
// import soundAdd from "../../../audio/plant-sound-plus.mp3"


const BistroControl = ({type , addPot , removePot , count}) => {
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
    <div className={classes.BistroControl}>
        <Button 
        className={classes.Button} 
        onClick={() => {addPot(type)}}>+</Button>
         <BistroMenuSize type={type} />
        <Button 
        className={classes.Button} 
        onClick={() => {removePot(type) ; removeSound()}} disabled={!count}>-</Button>
    </div> );
}
 
export default BistroControl;
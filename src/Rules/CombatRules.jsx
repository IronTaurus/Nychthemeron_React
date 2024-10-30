import './rules.css';
import { HashLink } from 'react-router-hash-link';

const ScrollTo = (target, word) => {
    return(
        <HashLink className='scroll-link' to={`/CombatRules/#${target}`} 
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center'})}>
        {word}
        </HashLink>
    );
}
const TurnsAndRounds = () => {
    return(
        <div className="rule-block" id='turns phases'>
            <h3 className="main-title">Turns & Rounds</h3>
            <p className="text-block">
            Each battle consists of a number of rounds with each round consisting of each participant of the combat taking a turn.
            It is important to make the distinction between a Round and a Turn as a Round only ends after the last participant ends their Turn. 
            The Round is broken down into several phases some of which happen without any interference of a player. <i>(i.e. Preparation of the Round happens before any {ScrollTo("moment","“moment”")} thus making it impossible for a player to do anything before this phase is over.)</i> 
            </p>
            <div className='rule-section' id="phases">
                <h3 className="rule-title">Phases</h3>
                <ul className='rule-list'>
                    <li>
                        <div className="bullet-title">1. Preparation</div>
                        <p className="text-block">a. If this is the first Round, each participant draw their initiative.</p>
                        <p className="text-block">b. Adjust initiative order based on new information.</p>
                        <p className="text-block">c. Reset Armor to its base value.</p>
                    </li>
                    <li>
                        <div className="bullet-title">2. Start of the Round</div>
                        <p className="text-block"><i>(This is the first moment any player can choose to activate a reaction.)</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">3. Participants Turns</div>
                        <p className="text-block"><i>(During this phase each participant in the combat each take their turn in the order of initiative starting with the highest.)</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">4. End of the Round</div>
                        <p className="text-block"><i>(This is the last moment any player can choose to activate a reaction.)</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">5. Clean-up </div>
                        <p className="text-block">a. Remove any rest {ScrollTo("armor", "Temporary Armor")} and {ScrollTo("armor", "Temporary Health")}.</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}
const MomentsAndReactions = () => {
    return(
        <div className='rule-block' id='moment'>
            <h3 className="main-title">Moments & Reactions</h3>
            <p className="text-block">
                Some cards such as those of the type Reaction can be activated on another creature’s turn at certain “Moment”s. 
                These moments are usually printed on the card itself but in other cases you can refer to this table.
                <i>(i.e. The card “Patience” has the activation condition “At any moment” in which it can be activated at any possible moment according to the table of moments)</i>
            </p>
            <div className='rule-section'>
            <h3 className="rule-title">List of Moments</h3>
                <ul className='rule-list'>
                    <li>
                        <div className="bullet-title">Start</div>
                        <p className="text-block">Start of a Turn or Round. <i>(i.e. “At the start of your  turn”)</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">Activation</div>
                        <p className="text-block">Activation of a card or effect. <i>((i.e. “Whenever a creature attacks”.))</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">Pre-Resolution</div>
                        <p className="text-block">After the effects of a card have been determined and a resolution is imminent. <i>((i.e. “Whenever a creature is hit by an attack”.))</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">Resolution </div>
                        <p className="text-block">After the resolution of a card or effect. <i>((i.e. “Whenever you are dealt damage”.))</i></p>
                    </li>
                    <li>
                        <div className="bullet-title">End </div>
                        <p className="text-block">End of a turn or round. <i>((i.e. “At the end of the round”.))</i></p>
                    </li>
                </ul>
            </div>  
        </div>
    );
}
const Armor = () => {
    return(
        <div className='rule-block'>
            <h3 className="main-title">Armor & Health</h3>
            <p className="text-block">
            Armor will block incoming damage and is a great way to soak damage. 
            The rules of the armor state the following: “Whenever you are dealt damage, 
            for each point of damage remove an equal number of charges and reduce damage 
            taken equal to the number of charges removed this way.”
            </p>
            <div className='rule-section' id="armor">
                <h3 className="rule-title">Base Armor</h3>
                <p className="text-block">
                    Base armor is the physical armor you wear or in some cases gain from a feat.
                    Base Armor will reset to its original value at the start of every Combat Round.
                    Base armor blocks damage from physical attacks such as ranged or melee, it does 
                    not damage from magic attacks.
                    <i>(i.e. Player A has 6 Base Armor, an enemy hits them with a physical attack 
                        dealing 3 damage reducing the armor down to 3. During the {ScrollTo("phases", "Preparation Phase")} at the start of the next Round 
                        the Base Armor is reset to 6)</i>
                </p>
            </div>
            <div className='rule-section'>
                <h3 className="rule-title">Temporary Armor</h3>
                <p className="text-block">
                    Remaining Temporary Armor will be discarded at the end of the round and not be reset.
                    Temporary armor is armor usually gained from a spell or skill. Just like Base Armor 
                    the temporary armor only blocks Physical damage unless stated otherwise.
                    <i>(i.e. The spell “Phantom Armor” states that until the end of the round its Temporary Armor 
                        can block any non-radiant damage making it able to block physical and magical damage.)</i>
                </p>
            </div>
        </div>
    );
}
const ActionCardsInCombat = () => {
    return(
        <div className='rule-block'>
            <h3 className="main-title">Action cards</h3>
            <p className="text-block">
                Action Cards while in combat have mainly two uses, dealing damage and checks against inflictions. 
            </p>
            <div className='rule-section' id="dealingDamage">
                <h3 className="rule-title">Dealing Damage</h3>
                <p className="text-block">
                Many of the different abilities and spells will have a base damage followed by a series of different 
                additional damage, the base damage is usually to draw a number of Action Cards and add the numbers 
                together to deal that much damage on the attack while the additional damage can be the base damage of 
                the weapon or an additional conditional damage.
                It is also important to remember that when you calculate damage with Action Cards the DayTime does 
                not change the value as it does when doing checks, instead you always use its base value.<br/>
                <i>(i.e. Player A has 4 Rage Charges and uses “Brutal Cleave” targeting two enemies and consumes 2 
                    of the Rage Charges. When calculating damage Player A draws a 3 and a 1 on the Action Cards and 
                    gains an additional 3 because they are using a Hand Axe, in addition to that they also gain +2 damage 
                    because they used 2 Rage Charges dealing a total of  9 damage to both enemies.)</i>
 
                </p>
            </div>
            <div className='rule-section' id="checks">
                <h3 className="rule-title">Checks Against Inflictions</h3>
                <p className="text-block">
                Usually when a player is being attacked with a spell that can inflict conditions they have a chance 
                to resist the infliction by making a check against the corresponding type. This is done the same way 
                as normal checks, you draw 3 Action Cards and add the values together including the DayTime bonuses. 
                You may also use Aspiration Points when dealing with checks against inflictions. The type of checks 
                is specified on the card and are usually in broad terms like Mind or Body.
                </p>
            </div>
        </div>
    )
}

const CombatRules = () => {
    return (
        <>
            <TurnsAndRounds/>
            <MomentsAndReactions/>
            <ActionCardsInCombat/>
            <Armor/>
            
        </>
    )
}

export default CombatRules;
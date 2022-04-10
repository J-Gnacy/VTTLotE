/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class LoteActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    // Make modifications to data here. For example:

    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, ability] of Object.entries(data.abilities)) {
      // Calculate the modifier using d20 rules.
        ability.mod = ability.value;
    }

    for (let [skillKey, skill] of Object.entries(data.skills)) {
        skill.mod = 2*(skill.value);
        skill.dice = "3d6";

        if(skill.linkedAbi==1)
        {
          skill.linkedAbiMod=data.abilities.Sila.mod;
        }
        else if(skill.linkedAbi==2)
        {
          skill.linkedAbiMod=data.abilities.Zrecznosc.mod;
        }
        else if(skill.linkedAbi==3)
        {
          skill.linkedAbiMod=data.abilities.Gibkosc.mod;
        }
        else if(skill.linkedAbi==4)
        {
          skill.linkedAbiMod=data.abilities.Wytrzymalosc.mod;
        }
        else if(skill.linkedAbi==5)
        {
          skill.linkedAbiMod=data.abilities.Rozum.mod;
        }
        else if(skill.linkedAbi==6)
        {
          skill.linkedAbiMod=data.abilities.Psychika.mod;
        }
        else if(skill.linkedAbi==7)
        {
          skill.linkedAbiMod=data.abilities.Zmysly.mod;
        }
    }
  }

}
const Fighter = class Fighter {
    constructor ({name, damage, hp, agility}) {
      this.name = name;
      this.damage = damage;
      this.hp = hp;
      this.agility = agility;
      this.wins = 0;
      this.loss = 0;
    }
    getName() {
      return this.name;
    }
    getDamage() {
      return this.damage;
    }
    getHP() {
      return this.hp;
    }
    getAgility() {
      return this.agility;
    }
    attack ( defender ) {
      let resultOfAttack = 100;
      let successOfAttack = resultOfAttack - defender.getAgility();
      let chanceOfSuccess = Math.floor( Math.random() * resultOfAttack);
      if( chanceOfSuccess <= successOfAttack ) {
        defender.dealDamage(this.getDamage());
        console.log(`${this.name} make ${this.damage} damage to ${defender.name}`);
      } else {
        console.log(`${this.name} attack missed`);
      }
    }
    dealDamage( damage ) {
      this.hp = this.hp - damage;
      this.hp < 0 ? this.hp = 0 : this.hp - damage;
    }
    logCombatHistory() {
      let message = `Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.loss}`;
      return console.log(message);
    }
    heal( healthPoints ) {
      let totalHP = 100;
      let currentHP = this.hp;
      let results = healthPoints + currentHP;
      results <= totalHP ? this.hp += healthPoints : console.log(`You can get only ${this.hp = totalHP}`);
    }
    addWin() {
      let score = this.wins += 1;
      return score;
    }
    addLoss() {
      let score = this.loss += 1;
      return score;
    }
  }
  
  const fighter1 = new Fighter({name: 'Bob', damage: 25, hp: 100, agility: 70});
  const fighter2 = new Fighter({name: 'Carlos', damage: 20, hp: 100, agility: 50});
  
  const battle = ( fighterOne, fighterTwo ) => {
  
    while (fighterOne.hp > 0 && fighterTwo.hp > 0) {
  
      fighterOne.hp > 0 || fighterTwo.hp > 0 ? fighterOne.attack( fighterTwo ) : '';
      fighterOne.hp > 0 || fighterTwo.hp > 0 ? fighterTwo.attack( fighterOne ) : '';
  
      fighterOne.hp === 0 ? console.log(`${fighterOne.name} is dead and can't fight!`) : '';
      fighterTwo.hp === 0 ? console.log(`${fighterTwo.name} is dead and can't fight!`) : '';
    }
    fighterOne.hp > 0 ? fighterOne.addWin() : fighterOne.addLoss();
    fighterTwo.hp > 0 ? fighterTwo.addWin() : fighterTwo.addLoss();
  }
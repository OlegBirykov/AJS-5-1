import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

function exampleCreateHeroes() {
  const bowman = new Bowman('Изя', 'Bowman');
  const swordsman = new Swordsman('Изя', 'Swordsman');
  const magician = new Magician('Изя', 'Magician');
  const daemon = new Daemon('Изя', 'Daemon');
  const undead = new Undead('Изя', 'Undead');
  const zombie = new Zombie('Изя', 'Zombie');
  return {
    bowman, swordsman, magician, daemon, undead, zombie,
  };
}

exampleCreateHeroes();

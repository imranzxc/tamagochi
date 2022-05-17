const tamagotchi = {
  name: 'Toma',
  meal: 1,
  energy: 4,
  mood: 3,

  setName: function (name) {
    this.name = name;
  },

  eat: function () {
    if (this.food < 5) {
      this.food++;
    }
    this.mood--;
  },

  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }
    this.food--;
  },

  play: function () {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },

  getStatus: function () {
    if (this.food <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(`${this.name} умер :(`);
      return false;
    }
    const foodStatus = this.food < 3 ? 'Я голоден' : 'Я сыт';
    const energyStatus = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
    const moodStatus = this.mood < 3 ? 'Мне скучно' : 'Мне весело';

    console.log(
      `Еда: ${foodStatus} (${this.food}); Энергия: ${energyStatus}(${this.energy}); Натсроение: ${moodStatus} (${this.mood});`
    );
  },
};
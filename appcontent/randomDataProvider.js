class Randomizer {
    getRandomNumber (index=0){
        const multiplier = [
            10,
            100,
            1000,
            10000,
            100000,
            1000000,
            10000000,
            100000000,
            1000000000,
            10000000000,
            100000000000
        ];
        finalIndex = index >1 ? 1 : index;
        return Math.ceil(Math.random() * multiplier[finalIndex]);
    }

    getRandomAlphabet() {
        const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        return char[this.getRandomNumber() - 1];
    }

    getFirstName() {
        const firstName = ['mario', 'jim', 'jhon', 'marcus', 'joe', 'thomas', 'kate', 'seth', 'maria', 'victor'];
        let capitalisedFirstName = [];
        firstName.forEach((name) => {
            capitalisedFirstName.push(`${name.charAt(0).toLocaleUpperCase()}${name.slice(1)}`);
        });
        return `${capitalisedFirstName[this.getRandomNumber() - 1]}${this.getRandomAlphabet()}`;
    }

    getLastName() {
        const lastName = ['nats', 'stam', 'justin', 'carla', 'papado', 'jack', 'daniel', 'ken', 'liz', 'emily'];
        let capitalisedLastName = [];
        lastName.forEach((name) => {
            capitalisedLastName.push(`${name.charAt(0).toLocaleUpperCase()}${name.slice(1)}`);
        });
        return `${capitalisedLastName[this.getRandomNumber() - 1]}${this.getRandomAlphabet()}`;
    }

    getEmailID() {
        const emailID = `${this.getFirstName()}_${this.getLastName()}_${this.getRandomNumber(6)}@g.com`;
        return emailID;
    }

}


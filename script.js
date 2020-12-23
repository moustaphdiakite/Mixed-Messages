// Topic : A fortune Teller 

const fortuneGenerator = {
    _subject: ["You"],
    _verb: ["will", "will not", "are going to", "are not going to", "shall", "shall not"],
    _object: ["lose all your money in a divorce.","find a beautiful woman to marry.", "go through a brutal divorce.","lose your life in your 50s.", "be successful in your personal life.", "enjoy good health.", "live a long and happy life.", "be invited to an exciting event.", "become very wealthy.", "have many children.", "be lucky in your life.", "have a lot of fame."],
    get subject() {
        return this._subject;
    },
    set subject(subject) {
        this._subject = subject;
    },
    get verb() {
        return this._verb;
    },
    set verb(verb) {
        this._verb = verb;
    },
    get object() {
        return this._object;
    },
    set object(object) {
        this._object = object;
    },
    
    addObject(phrase) {
        this._object.push(phrase); // To add new phrase to the object array.
    },
    fortumeMessage() {
        let elementone = this._subject[Math.floor(Math.random() * this._subject.length)];
        let elementtwo = this._verb[Math.floor(Math.random() * this._verb.length)];
        let elementthree = this._object[Math.floor(Math.random() * this._object.length)];
        let finalMessage = elementone + " " + elementtwo + " " + elementthree;
        console.log(`The gods have spoken. They spoke that ${finalMessage}`);
    }
};

fortuneGenerator.fortumeMessage();

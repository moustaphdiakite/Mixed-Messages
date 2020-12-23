// Topic : A fortuner Teller 

const fortuneGenerator = {
    _subject: ["You"],
    _verb: [],
    _object: [],
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
    }

};

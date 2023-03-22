const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Светлана",
            "id_3": "Анастасия",
            "id_4": "Виктория",
            "id_5": "Мария",
            "id_6": "Елизавета",
            "id_7": "Вероника",
            "id_8": "Татьяна",
            "id_9": "Елена",
            "id_10": "Оксана"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.person.gender=='Мужчина' ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },

    randomSurname: function() {

        return this.person.gender=='Мужчина' ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson)+'а';

    },

    randomGender: function() {

        return this.randomIntNumber()==0 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomGender: function() {

        return this.randomIntNumber()==0 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomMonth: function() {

        switch (this.randomIntNumber(1,12)) {
            case 1:
                return 'января';
                break;
            case 2:
                return 'февраля';
                break;
            case 3:
                return 'марта';
                break;
            case 4:
                return 'апреля';
                break;
            case 5:
                return 'мая';
                break;
            case 6:
                return 'июня';
                break;
            case 7:
                return 'июля';
                break;
            case 8:
                return 'августа';
                break;
            case 9:
                return 'сентября';
                break;
            case 10:
                return 'октября';
                break;
            case 11:
                return 'ноября';
                break;
            case 12:
                return 'декабря';
                break;
        }

    },

    randomDay: function() {

        switch (this.person.birthMonth) {
            case 'февраля':
                return this.randomIntNumber(28,1);
                break;
            case 'сентябрь':
            case 'апрель':
            case 'июнь':
            case 'ноябрь':
                return this.randomIntNumber(30,1);
                break;
            default:
                return this.randomIntNumber(31,1);
                break;
        }

    },

    randomProfession: function() {

        if (this.person.gender=='Мужчина') {

            return this.randomValue(`{
                "count": 3,
                "list": {     
                    "id_1": "Шахтер",
                    "id_2": "Кузнец",
                    "id_3": "Столяр"
                }
            }`);

        }else{

            return this.randomValue(`{
                "count": 3,
                "list": {     
                    "id_1": "Крановщик",
                    "id_2": "Водитель",
                    "id_3": "Бровист"
                }
            }`);

        }

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.lastName = this.randomSurname();

        this.person.birthYear = this.randomIntNumber(1990,1980);
        this.person.birthMonth = this.randomMonth();
        this.person.birthDay = this.randomDay();

        this.person.profession = this.randomProfession();

        this.person.fatherName = this.randomValue(this.firstNameMaleJson);

        return this.person;
    }

};

const patronymicGenerator = {

    getPatronymic: function (person) {

        //Достаем окончание и корень
        fatherEnd = person.fatherName.slice(person.fatherName.length-2, person.fatherName.length);
        fatherRoot = person.fatherName.slice(0, person.fatherName.length-2);

        //Меняем корень
        switch (fatherEnd){
            case "др": patronymic = fatherRoot+"дров"; break;   //Александр     Алексан   +др->ов     +ич/на
            case "им": patronymic = fatherRoot+"имов"; break;   //Максим        Макс      +им->имов   +ич/на
            case "ан": patronymic = fatherRoot+"анов"; break;   //Иван          Ив        +ан->анов   +ич/на
            case "ем": patronymic = fatherRoot+"емов"; break;   //Артем         Арт       +ем->емов   +ич/на
            case "ий": patronymic = fatherRoot+"иев"; break;    //Дмитрий       Дмитр     +ий->ьев    +ич/на 
            case "та": patronymic = fatherRoot+"тич"; break;    //Никита        Ники      +та->тич    +''/на
            case "ил": patronymic = fatherRoot+"лов"; break;    //Михаил        Миха      +ил->йлов   +ич/на
            case "ил": patronymic = fatherRoot+"ов"; break;     //Даниил        Дани      +ил->ов     +ич/на
            case "ор": patronymic = fatherRoot+"оров"; break;   //Егор          Ег        +ор->ов     +ич/на
            case "ей": patronymic = fatherRoot+"еев"; break;    //Андрей        Андр      +ей->еев    +ич/на
        }

        //Добавляем окончание в зависимости от пола
        //Хз насколько адекватно так решать вопрос с именем Никита (Никитичич)
        if (person.gender=="Мужчина" && patronymic.slice(patronymic.length-2, patronymic.length)!="ич") {

            return patronymic.slice(patronymic.length-2, patronymic.length)!="ич"  ? patronymic+"ич" : patronymic;

        }else{

            return patronymic+"на";

        }

    }

};
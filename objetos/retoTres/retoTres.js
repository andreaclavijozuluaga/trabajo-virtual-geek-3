const geekGirl = {};
geekGirl.name = 'Maria';
geekGirl.age = 34;
geekGirl.profesion = 'Periodista';

geekGirl.showBio = function () => {
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años, y soy ' + this.profesion;
}

console.log(geekGirl.showBio())
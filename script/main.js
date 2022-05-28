const el1 = document.querySelector('select[name="visio"]');
const el2 = document.querySelector('select[name="succ"]');

console.log("Сперва включи свет, если темно");
// Итак ты на кухне: светло или темно )?

el1.addEventListener('change', (ev) => {

if (el1.value === 'нет') {
    console.log("Найди холодильник наощупь");
}
// Видно ли холодильник? 

console.log("Подойдя к холодильнику открой его");
console.log("Посмотри где лежит колбаса и возьми ее");
console.log("Не забудь закрыть холодильник");
});


el2.addEventListener('change', (ev) => {

if (el2.value === 'нет') {
    console.log("А ты точно на кухне? Или опять приснилось)");
}
else if (el2.value === 'да') {

console.log("Бери уже колбасу");
console.log("И не забудь закрыть холодильник");
}
});

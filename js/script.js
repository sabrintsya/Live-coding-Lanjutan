const kalimat = "hello";
const kalimat2 = "aabbbcc";

console.log("Jumlah karakter:", hasil.totalKarakter);
console.log("input Karakter:", hasil.inputKarakter);


function hitungKarakter (str) {
    const totalKarakter = str.length;

    const InputKarakter = {};
    for (let i = 0; i < str.length; i++) {
        const karakter = str[i];
        inputKarakter[karakter] = (inputKarakter[karakter] || 0) + 1;
    }

    return {
        totalKarakter,
        inputKarakter
    };
}
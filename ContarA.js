var str = "Esta é uma string de exemplo para verificar a letra A.";

function contarA(string) {
    return (string.match(/a/gi) || []).length;
}

console.log("A letra 'a' aparece " + contarA(str) + " vezes na string.");

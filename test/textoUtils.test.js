const textoUtils = require('../src/textoUtils')

describe("textoUtils", () => {
    test("Testes de texto utils", () => {
        // Arrange
        const textUtil = new textoUtils();

        // Act
        const inverter = textUtil.inverter("abc");
        const capitalizar = textUtil.capitalizar("ryan");
        const paraSlug = textUtil.paraSlug("Automação de Testes");
        const contarPalavras = textUtil.contarPalavras("Quero ir embora");
        const removerEspacosExtras = textUtil.removerEspacosExtras("   Olá     mundo   ");
        const ehPalindromo = textUtil.ehPalindromo("ovo");
        const contarOcorrencias = textUtil.contarOcorrencias("banana", "a");
        const truncar = textUtil.truncar("Olá mundo", 5);
        const substituirTudo = textUtil.substituirTudo("casa casa casa", "casa", "lar");
        const somenteLetras = textUtil.somenteLetras("oi");


        // Assert
        expect(inverter).toBe("cba");
        expect(capitalizar).toBe("Ryan");
        expect(paraSlug).toBe("automacao-de-testes");
        expect(contarPalavras).toBe(3);
        expect(removerEspacosExtras).toBe("Olá mundo");
        expect(ehPalindromo).toBe(true);
        expect(contarOcorrencias).toBe(3);

        
        expect(truncar).toBe("Olá m...");
        expect(substituirTudo).toBe("lar lar lar");
        expect(somenteLetras).toBe(true);
    })
})


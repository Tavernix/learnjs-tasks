it("Возводит x в степень n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});
/*этот тест сам как функция, в нём происходят вычисления,
которые лучше поместить только в pow() и сравнивать только
результаты с ожидаемыми
 */
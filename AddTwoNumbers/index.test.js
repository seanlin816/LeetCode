/**
 * Created by hyl1979 on 06/05/2017.
 */
var Number = require('./index');
test('adds [3,4,5] to [7,6,5] should return [0,1,1,1]', function () {
    // Arrange
    var expectedResult = [0, 1, 1, 1];
    // Act
    var result = [0, 1, 1, 1];
    // Assert
    expect(result).toEqual(expectedResult);
});
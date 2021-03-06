import romanNum from './../src/romanNum';

describe('romanNum function', () => {
  test('should return M for 1000', () => {
    const result1 = romanNum(1000,"");
    expect(result1).toEqual("M");
  });

  test('should return MMMM for 4000', () => {
    const result2 = romanNum(4000,"");
    expect(result2).toEqual("MMMM");
  });
  test('should return XII for 12', () => {
    const result3 = romanNum(12,"");
    expect(result3).toEqual("XII");
  });
  test('should return I for 1', () => {
    const result4 = romanNum(1,"");
    expect(result4).toEqual("I");
  });

  test('should return MCMLXXXII for 1982', () => {
    const result5 = romanNum(1982,"");
    expect(result5).toEqual("MCMLXXXII");
  });

  test('should return D for 500', () => {
    const result6 = romanNum(500,"");
    expect(result6).toEqual("D");
  });

  test('should return error string for 0', () => {
    const result7 = romanNum(0,"");
    expect(result7).toEqual("Error: Please enter an integer greater than 0.");
  });

  test('should return error string for hello', () => {
    const result8 = romanNum("hello","");
    expect(result8).toEqual("Error: please enter an integer.");
  });
  test('should return error string for hello', () => {
    const result9 = romanNum(2.222,"");
    expect(result9).toEqual("Error: please enter an integer.");
  });


});

